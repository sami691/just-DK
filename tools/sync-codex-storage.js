const fs = require("fs");
const path = require("path");
const { ClassicLevel } = require(
  "C:/Users/user/AppData/Local/OpenAI/Codex/runtimes/cua_node/1b23c930bdf84ed6/bin/node_modules/@oai/cdp-browser-backend/dist/skill/scripts/node_modules/classic-level"
);

const source = "C:/Users/user/AppData/Roaming/Codex/web/Codex/Default/Partitions/codex-browser-app/Local Storage/leveldb";
const temp = path.join(__dirname, ".local-storage-copy");
const output = path.join(__dirname, "..", "published-data.js");

function decodeValue(value) {
  const content = value[0] === 0
    ? value.subarray(1).toString("utf16le")
    : value.subarray(1).toString("utf8");
  try {
    return JSON.parse(content);
  } catch {
    return content;
  }
}

async function main() {
  fs.rmSync(temp, { recursive: true, force: true });
  fs.mkdirSync(temp, { recursive: true });
  for (const name of fs.readdirSync(source)) {
    if (name === "LOCK") continue;
    fs.copyFileSync(path.join(source, name), path.join(temp, name));
  }

  const db = new ClassicLevel(temp, {
    keyEncoding: "buffer",
    valueEncoding: "buffer",
    readOnly: true
  });
  await db.open();

  const storage = {};
  for await (const [keyBuffer, valueBuffer] of db.iterator()) {
    const key = keyBuffer.toString("utf8");
    const marker = key.indexOf("ubi-");
    if (marker === -1) continue;
    storage[key.slice(marker)] = decodeValue(valueBuffer);
  }
  await db.close();
  fs.rmSync(temp, { recursive: true, force: true });

  const published = {
    version: new Date().toISOString(),
    products: storage["ubi-products"] || [],
    customCategories: storage["ubi-categories"] || [],
    deliverySettings: storage["ubi-delivery-settings"] || {},
    siteSettings: storage["ubi-site-settings"] || {},
    customText: storage["ubi-custom-text"] || {}
  };

  fs.writeFileSync(
    output,
    `window.UBI_PUBLISHED_DATA = ${JSON.stringify(published)};\n`,
    "utf8"
  );
  console.log(`Published ${published.products.length} products to ${output}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
