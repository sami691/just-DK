const phoneNumber = "8801616524073";
const adminPassword = "sami@321";
const freeDeliveryAt = 2500;
const defaultDeliverySettings = {
  insideDhaka: 80,
  dhakaSubArea: 100,
  outsideDhaka: 130
};

const defaultProducts = [
  { id: 1, category: "Fashion", name: { en: "Everyday T-Shirt", bn: "ডেইলি টি-শার্ট" }, price: 450, stock: 12, views: 4, cartAdds: 1, sold: 0, createdAt: Date.now() - 2 * 86400000, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", colors: ["Black", "Lime", "White"], sizes: ["M", "L", "XL"] },
  { id: 2, category: "Gadget", name: { en: "Wireless Earbuds", bn: "ওয়্যারলেস ইয়ারবাডস" }, price: 1250, stock: 6, views: 16, cartAdds: 8, sold: 4, createdAt: Date.now() - 12 * 86400000, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80", colors: ["White", "Black"], sizes: ["Standard"] },
  { id: 3, category: "Beauty", name: { en: "Glow Care Kit", bn: "গ্লো কেয়ার কিট" }, price: 780, stock: 9, views: 7, cartAdds: 2, sold: 1, createdAt: Date.now() - 4 * 86400000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80", colors: ["Set"], sizes: ["Small", "Large"] },
  { id: 4, category: "Home", name: { en: "Smart Desk Lamp", bn: "স্মার্ট ডেস্ক ল্যাম্প" }, price: 990, stock: 4, views: 11, cartAdds: 3, sold: 1, createdAt: Date.now() - 16 * 86400000, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80", colors: ["Warm", "White"], sizes: ["Standard"] },
  { id: 5, category: "Food", name: { en: "Premium Snack Box", bn: "প্রিমিয়াম স্ন্যাক বক্স" }, price: 360, stock: 18, views: 3, cartAdds: 1, sold: 0, createdAt: Date.now() - 1 * 86400000, image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80", colors: ["Mixed"], sizes: ["Box"] },
  { id: 6, category: "Accessories", name: { en: "Minimal Backpack", bn: "মিনিমাল ব্যাকপ্যাক" }, price: 1450, stock: 5, views: 15, cartAdds: 4, sold: 1, createdAt: Date.now() - 20 * 86400000, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80", colors: ["Olive", "Black"], sizes: ["18L", "24L"] },
  { id: 7, category: "Gadget", name: { en: "Fast Charging Cable", bn: "ফাস্ট চার্জিং কেবল" }, price: 220, stock: 30, views: 5, cartAdds: 1, sold: 0, createdAt: Date.now() - 8 * 86400000, image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=800&q=80", colors: ["Black"], sizes: ["1m", "2m"] },
  { id: 8, category: "Home", name: { en: "Kitchen Storage Set", bn: "কিচেন স্টোরেজ সেট" }, price: 650, stock: 0, views: 2, cartAdds: 0, sold: 0, createdAt: Date.now() - 3 * 86400000, image: "https://images.unsplash.com/photo-1584473457409-ae5c91d7d8b5?auto=format&fit=crop&w=800&q=80", colors: ["Clear"], sizes: ["6 pcs"] }
];

const text = {
  en: {
    navProducts: "Products", navOffers: "Offers", navContact: "Contact", cart: "Cart",
    heroEyebrow: "Everything shop", heroTitle: "Ubi Shop", heroText: "Daily essentials, fashion, gadgets, beauty and home items in one mobile-friendly shop.",
    shopNow: "Shop now", contactUs: "Contact us", trustDelivery: "Fast delivery", trustCod: "COD available", trustChat: "WhatsApp support", trustReturn: "Easy return",
    offerEyebrow: "Limited offer", offerTitle: "Flash deals for every basket", couponTitle: "Have a coupon?", couponText: "Enter your coupon code in the cart to get a discount.", featuredEyebrow: "Trending now", featuredTitle: "Hot and popular picks",
    recentEyebrow: "Recently viewed", recentTitle: "Pick up where you left off",
    applyCoupon: "Apply coupon", sortFeatured: "Featured", sortLow: "Price: low to high", sortHigh: "Price: high to low",
    faqTitle: "FAQ", faqText: "Delivery charge depends on area. Order confirmation is handled through WhatsApp.",
    policyTitle: "Return policy", policyText: "Please check items during delivery. Return requests are accepted within 24 hours.",
    reviewTitle: "Customer love", reviewText: "Helpful support, quick replies, and practical prices for everyday shopping.",
    contactEyebrow: "Need help?", contactTitle: "Talk to Ubi Shop", contactText: "Ask about products, delivery, bulk orders, or custom requests.", whatsAppUs: "WhatsApp us",
    yourCart: "Your cart", wishlistTitle: "Wishlist", couponCode: "Coupon code", couponEligibleNote: "Coupon works only on Eligible products.", subtotal: "Subtotal", discount: "Discount", delivery: "Delivery", total: "Total", checkout: "Order now", orderConfirmLine: "Send this message to confirm your order.", orderName: "Name", orderPhone: "Phone", phoneError: "Phone number must be exactly 11 digits.", orderDeliveryArea: "Delivery area", orderDistrict: "District", orderUpazila: "Upazila", orderAddress: "Detail address", addressHelp: "Important: write your exact road, house, floor or landmark. The delivery man will use this address to find you.", orderNote: "Note",
    add: "Add", view: "View", inStock: "In Stock", limitedStock: "Limited", outStock: "Out of Stock", all: "All categories", search: "Search products", freeLeft: "Add {amount} eligible items for free delivery", freeDone: "Free delivery unlocked", empty: "Your cart is empty", emptyCartHelp: "Add products first, then checkout on WhatsApp.", continueShopping: "Continue shopping", noProducts: "No products found. Try another search or category."
    , adminEyebrow: "Shop admin", adminTitle: "Add or edit products", adminNote: "Badges are automatic: New for fresh uploads, Popular for many views, Hot for more sales.", adminNameEn: "English name", adminNameBn: "Bangla name", adminDescEn: "English description", adminDescBn: "Bangla description", adminCategory: "Category", adminNewCategory: "Add new category", adminAddCategory: "Add", adminRegularPrice: "Real price", adminPrice: "Discount price", stockIn: "In Stock", stockLimited: "Limited", stockOut: "Out of Stock", adminStock: "Stock status", adminVideoUpload: "Upload video", adminImageUpload: "Upload pictures", adminColors: "Colors", adminSizes: "Sizes", adminFreeDelivery: "Free delivery eligible", freeDeliveryEligible: "Eligible", noFreeDelivery: "", adminSave: "Save product", adminClear: "Clear", adminSearch: "Search product to edit", adminNoProducts: "No matching products found.", adminEdit: "Edit", adminDelete: "Delete", deliverySettingsTitle: "Delivery charges", deliverySettingsText: "Set once. Checkout will use these amounts automatically.", insideDhaka: "Inside Dhaka", dhakaSubArea: "Dhaka Sub Area", outsideDhaka: "Outside Dhaka", saveDelivery: "Save delivery", backupTitle: "Data backup", backupText: "Export before website updates. Import later to restore your products.", exportData: "Export data", importData: "Import data", badgeNew: "New", badgePopular: "Popular", badgeHot: "Hot", badgeSoldOut: "Sold out", badgeLow: "Limited", statViews: "views", statCart: "cart", statSold: "sold", backProducts: "Back to products", detailDesc: "A practical pick from Ubi Shop with fast support, easy WhatsApp ordering, and flexible delivery options.", addCart: "Add to cart", buyNow: "Buy now", share: "Share", productInfo: "Product info", deliveryInfo: "Delivery", returnInfo: "Return", supportInfo: "Support", detailDelivery: "Delivery charge depends on your area. Free delivery can unlock from eligible products only.", detailReturn: "Check the item during delivery. Return requests are accepted within 24 hours.", detailSupport: "Message us on WhatsApp for size, color, stock, or bulk order questions.", reviews: "Reviews", reviewSample: "Customers like the quick replies, simple ordering, and useful prices.", relatedProducts: "Related products", qty: "Qty", color: "Color", size: "Size", selectedImages: "{count} pictures selected", selectedVideo: "Video selected: {name}", noImages: "No new pictures selected", off: "OFF", couponApplied: "{percent}% coupon applied"
  },
  bn: {
    navProducts: "পণ্য", navOffers: "অফার", navContact: "যোগাযোগ", cart: "কার্ট",
    heroEyebrow: "সবকিছুর দোকান", heroTitle: "Ubi Shop", heroText: "নিত্যপ্রয়োজনীয় জিনিস, ফ্যাশন, গ্যাজেট, বিউটি ও হোম আইটেম এক জায়গায়।",
    shopNow: "শপ করুন", contactUs: "যোগাযোগ", trustDelivery: "দ্রুত ডেলিভারি", trustCod: "ক্যাশ অন ডেলিভারি", trustChat: "WhatsApp সাপোর্ট", trustReturn: "সহজ রিটার্ন",
    offerEyebrow: "সীমিত অফার", offerTitle: "প্রতিটি অর্ডারে ফ্ল্যাশ ডিল", couponTitle: "কুপন আছে?", couponText: "ছাড় পেতে cart-এ coupon code লিখুন।", featuredEyebrow: "Trending now", featuredTitle: "Hot এবং Popular পণ্য",
    recentEyebrow: "সম্প্রতি দেখা", recentTitle: "যেখান থেকে দেখছিলেন",
    applyCoupon: "কুপন দিন", sortFeatured: "ফিচার্ড", sortLow: "কম দাম আগে", sortHigh: "বেশি দাম আগে",
    faqTitle: "প্রশ্নোত্তর", faqText: "এলাকা অনুযায়ী ডেলিভারি চার্জ হবে। অর্ডার WhatsApp-এ কনফার্ম করা হবে।",
    policyTitle: "রিটার্ন পলিসি", policyText: "ডেলিভারির সময় পণ্য দেখে নিন। ২৪ ঘণ্টার মধ্যে রিটার্ন অনুরোধ নেওয়া হয়।",
    reviewTitle: "কাস্টমার রিভিউ", reviewText: "সহায়ক সাপোর্ট, দ্রুত রিপ্লাই, আর দৈনন্দিন কেনাকাটার জন্য ভালো দাম।",
    contactEyebrow: "সাহায্য লাগবে?", contactTitle: "Ubi Shop-এর সাথে কথা বলুন", contactText: "পণ্য, ডেলিভারি, bulk order বা custom request নিয়ে জিজ্ঞেস করুন।", whatsAppUs: "WhatsApp করুন",
    yourCart: "আপনার কার্ট", wishlistTitle: "Wishlist", couponCode: "কুপন কোড", couponEligibleNote: "কুপন শুধু Eligible পণ্যে কাজ করবে।", subtotal: "সাবটোটাল", discount: "ছাড়", delivery: "ডেলিভারি", total: "মোট", checkout: "Order now", orderConfirmLine: "অর্ডার confirm করতে এই message Send করুন।", orderName: "নাম", orderPhone: "ফোন", phoneError: "ফোন নম্বর অবশ্যই ১১ ডিজিট হতে হবে।", orderDeliveryArea: "ডেলিভারি এলাকা", orderDistrict: "জেলা", orderUpazila: "উপজেলা", orderAddress: "বিস্তারিত ঠিকানা", addressHelp: "গুরুত্বপূর্ণ: রাস্তা, বাসা, ফ্লোর বা পরিচিত জায়গা লিখুন। ডেলিভারি ম্যান এই ঠিকানা দিয়ে আপনাকে খুঁজবে।", orderNote: "নোট",
    add: "যোগ করুন", view: "দেখুন", inStock: "In Stock", limitedStock: "Limited", outStock: "Out of Stock", all: "সব ক্যাটাগরি", search: "পণ্য খুঁজুন", freeLeft: "ফ্রি ডেলিভারির জন্য eligible পণ্য আর {amount} যোগ করুন", freeDone: "ফ্রি ডেলিভারি পেয়েছেন", empty: "আপনার কার্ট খালি", emptyCartHelp: "আগে পণ্য যোগ করুন, তারপর WhatsApp-এ অর্ডার করুন।", continueShopping: "শপিং চালিয়ে যান", noProducts: "কোনো পণ্য পাওয়া যায়নি। অন্য search বা category চেষ্টা করুন।"
    , adminEyebrow: "শপ অ্যাডমিন", adminTitle: "পণ্য যোগ বা এডিট করুন", adminNote: "Badge automatic: নতুন upload হলে New, বেশি view হলে Popular, বেশি sell হলে Hot।", adminNameEn: "English নাম", adminNameBn: "বাংলা নাম", adminDescEn: "English description", adminDescBn: "বাংলা description", adminCategory: "ক্যাটাগরি", adminNewCategory: "নতুন ক্যাটাগরি যোগ করুন", adminAddCategory: "Add", adminRegularPrice: "Real price", adminPrice: "Discount price", adminStock: "Stock status", stockIn: "In Stock", stockLimited: "Limited", stockOut: "Out of Stock", adminVideoUpload: "ভিডিও আপলোড", adminImageUpload: "ছবি আপলোড", adminColors: "রং", adminSizes: "সাইজ", adminFreeDelivery: "Free delivery eligible", freeDeliveryEligible: "Eligible", noFreeDelivery: "", adminSave: "পণ্য save করুন", adminClear: "খালি করুন", adminSearch: "Edit করার জন্য product search করুন", adminNoProducts: "মিল থাকা কোনো product পাওয়া যায়নি।", adminEdit: "এডিট", adminDelete: "ডিলিট", deliverySettingsTitle: "ডেলিভারি চার্জ", deliverySettingsText: "একবার সেট করলে checkout-এ auto apply হবে।", insideDhaka: "Inside Dhaka", dhakaSubArea: "Dhaka Sub Area", outsideDhaka: "Outside Dhaka", saveDelivery: "Delivery save করুন", backupTitle: "Data backup", backupText: "Update দেওয়ার আগে export করুন। পরে import করলে product ফিরে আসবে।", exportData: "Export data", importData: "Import data", badgeNew: "New", badgePopular: "Popular", badgeHot: "Hot", badgeSoldOut: "Out of Stock", badgeLow: "Limited", statViews: "view", statCart: "cart", statSold: "sell", backProducts: "পণ্যে ফিরুন", detailDesc: "Ubi Shop-এর practical product, দ্রুত support, সহজ WhatsApp order, আর flexible delivery option সহ।", addCart: "কার্টে যোগ করুন", buyNow: "এখন কিনুন", share: "শেয়ার", productInfo: "পণ্যের তথ্য", deliveryInfo: "ডেলিভারি", returnInfo: "রিটার্ন", supportInfo: "সাপোর্ট", detailDelivery: "শুধু eligible product total থেকে free delivery unlock হবে।", detailReturn: "ডেলিভারির সময় পণ্য দেখে নিন। ২৪ ঘণ্টার মধ্যে return request নেওয়া হয়।", detailSupport: "Size, color, stock বা bulk order জানতে WhatsApp করুন।", reviews: "রিভিউ", reviewSample: "Customer-রা quick reply, simple order আর useful price পছন্দ করেন।", relatedProducts: "আরও পণ্য", qty: "পরিমাণ", color: "রং", size: "সাইজ", selectedImages: "{count} ছবি select হয়েছে", selectedVideo: "ভিডিও select হয়েছে: {name}", noImages: "নতুন ছবি select করা হয়নি", off: "OFF", couponApplied: "{percent}% কুপন apply হয়েছে"
  }
};

const editableTextKeys = [
  "navProducts", "navOffers", "navContact", "heroEyebrow", "heroTitle", "heroText", "shopNow", "contactUs",
  "trustDelivery", "trustCod", "trustChat", "trustReturn", "offerEyebrow", "offerTitle", "couponTitle", "couponText",
  "applyCoupon", "featuredEyebrow", "featuredTitle", "recentEyebrow", "recentTitle", "noProducts",
  "emptyCartHelp", "continueShopping", "orderConfirmLine", "addressHelp", "faqTitle", "faqText", "policyTitle", "policyText",
  "reviewTitle", "reviewText", "contactEyebrow", "contactTitle", "contactText", "whatsAppUs"
];

const defaultSiteSettings = {
  heroImage: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",
  whatsappNumber: phoneNumber,
  freeDeliveryAt,
  couponCode: "UBI10",
  couponPercent: 10,
  facebookUrl: "",
  instagramUrl: "",
  tiktokUrl: ""
};

const publishedData = window.UBI_PUBLISHED_DATA || {};
const publishedVersion = String(publishedData.publishedVersion || publishedData.version || "");
if (publishedVersion && localStorage.getItem("ubi-published-version") !== publishedVersion) {
  localStorage.setItem("ubi-products", JSON.stringify(publishedData.products || defaultProducts));
  localStorage.setItem("ubi-categories", JSON.stringify(publishedData.customCategories || []));
  localStorage.setItem("ubi-delivery-settings", JSON.stringify(publishedData.deliverySettings || defaultDeliverySettings));
  localStorage.setItem("ubi-site-settings", JSON.stringify(publishedData.siteSettings || defaultSiteSettings));
  localStorage.setItem("ubi-custom-text", JSON.stringify(publishedData.customText || {}));
  localStorage.setItem("ubi-published-version", publishedVersion);
}

let lang = localStorage.getItem("ubi-lang") || "en";
let cart = JSON.parse(localStorage.getItem("ubi-cart") || "{}");
let wishlist = JSON.parse(localStorage.getItem("ubi-wishlist") || "[]");
let products = migrateProducts(JSON.parse(localStorage.getItem("ubi-products") || "null") || defaultProducts);
let customCategories = JSON.parse(localStorage.getItem("ubi-categories") || "[]");
let deliverySettings = { ...defaultDeliverySettings, ...JSON.parse(localStorage.getItem("ubi-delivery-settings") || "{}") };
let siteSettings = { ...defaultSiteSettings, ...JSON.parse(localStorage.getItem("ubi-site-settings") || "{}") };
let customText = JSON.parse(localStorage.getItem("ubi-custom-text") || "{}");
let recentViews = JSON.parse(localStorage.getItem("ubi-recent-views") || "[]");
let stagedImages = [];
let couponApplied = false;
localStorage.removeItem("ubi-coupon");
let lastCartCount = 0;
let freeDeliveryWasUnlocked = false;
let checkoutDetails = JSON.parse(localStorage.getItem("ubi-checkout-details") || "{}");
cart = normalizeCart(cart);

const $ = (selector) => document.querySelector(selector);
const money = (value) => `৳${value.toLocaleString("en-US")}`;
const t = (key) => customText?.[lang]?.[key] || text[lang][key] || key;
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[char]));

function migrateProducts(list) {
  const now = Date.now();
  return list.map((item, index) => ({
    ...item,
    description: item.description || { en: "", bn: "" },
    stockStatus: item.stockStatus || (Number(item.stock || 0) === 0 ? "out" : Number(item.stock || 0) <= 3 ? "limited" : "in"),
    regularPrice: Number(item.regularPrice || item.price || 0),
    price: Number(item.price || item.regularPrice || 0),
    thumbnail: item.thumbnail || item.image || item.media,
    images: item.images?.length ? item.images : [item.image || item.media].filter(Boolean),
    thumbnails: item.thumbnails?.length ? item.thumbnails : (item.images?.length ? item.images : [item.thumbnail || item.image || item.media].filter(Boolean)),
    video: item.video || ((item.mediaType === "video" || String(item.media || "").startsWith("data:video")) ? item.media : ""),
    createdAt: item.createdAt || now - (index + 10) * 86400000,
    views: Number(item.views || 0),
    cartAdds: Number(item.cartAdds || 0),
    sold: Number(item.sold || 0),
    freeDelivery: item.freeDelivery !== false,
    media: item.media || item.image,
    mediaType: item.mediaType || (String(item.media || item.image).startsWith("data:video") || /\.(mp4|webm|ogg)(\?|$)/i.test(item.media || item.image) ? "video" : "image")
  }));
}

function isAvailable(item) {
  return (item.stockStatus || "in") !== "out";
}

function stockText(item) {
  const status = item.stockStatus || "in";
  if (status === "out") return t("outStock");
  if (status === "limited") return t("limitedStock");
  return t("inStock");
}

function stockClass(item) {
  const status = item.stockStatus || "in";
  if (status === "out") return "out";
  if (status === "limited") return "limited";
  return "";
}

function discountPercent(item) {
  const regular = Number(item.regularPrice || item.price || 0);
  const selling = Number(item.price || 0);
  if (!regular || !selling || selling >= regular) return 0;
  return Math.round(((regular - selling) / regular) * 100);
}

function priceHtml(item, className = "price-stack") {
  const off = discountPercent(item);
  return `
    <span class="${className}">
      <strong class="price">${money(item.price)}</strong>
      ${off ? `<span class="old-price">${money(item.regularPrice)}</span><span class="off-tag">${off}% ${t("off")}</span>` : ""}
    </span>`;
}

function autoBadge(item) {
  if (!isAvailable(item)) return t("badgeSoldOut");
  if (discountPercent(item)) return `${discountPercent(item)}% ${t("off")}`;
  if ((item.sold || 0) >= 3 || (item.cartAdds || 0) >= 8) return t("badgeHot");
  if ((item.views || 0) >= 10) return t("badgePopular");
  if (Date.now() - (item.createdAt || 0) < 7 * 86400000) return t("badgeNew");
  if ((item.stockStatus || "in") === "limited") return t("badgeLow");
  return item.category;
}

function badgeClass(item) {
  if (!isAvailable(item)) return "sold";
  if (discountPercent(item)) return "hot";
  if ((item.sold || 0) >= 3 || (item.cartAdds || 0) >= 8) return "hot";
  if ((item.views || 0) >= 10) return "popular";
  if ((item.stockStatus || "in") === "limited") return "low";
  return "";
}

function saveStorageValue(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not save ${key}:`, error);
    return false;
  }
}

let productSaveTimer;

function saveProductsSoon(immediately = false) {
  clearTimeout(productSaveTimer);
  if (immediately) {
    saveStorageValue("ubi-products", products);
    return;
  }
  productSaveTimer = setTimeout(() => saveStorageValue("ubi-products", products), 400);
}

function saveState(saveProductsImmediately = false) {
  // Product images already use most of localStorage. Keeping a second automatic
  // copy can exceed the browser quota and stop every live UI update.
  localStorage.removeItem("ubi-last-backup");
  saveStorageValue("ubi-cart", cart);
  saveStorageValue("ubi-wishlist", wishlist);
  saveStorageValue("ubi-categories", customCategories);
  saveStorageValue("ubi-delivery-settings", deliverySettings);
  saveStorageValue("ubi-site-settings", siteSettings);
  saveStorageValue("ubi-custom-text", customText);
  saveStorageValue("ubi-recent-views", recentViews);
  saveProductsSoon(saveProductsImmediately);
}

function translatePage() {
  document.documentElement.lang = lang === "bn" ? "bn" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  $("#searchInput").placeholder = t("search");
  $("#adminSearch").placeholder = t("adminSearch");
  $("#langToggle").textContent = lang === "en" ? "বাংলা" : "English";
  applySiteSettings();
  renderCategories();
  renderFeaturedSlider();
  renderProducts();
  renderRoute();
  renderCart();
  renderWishlist();
  renderAdminList();
  renderDeliveryAreaOptions();
  renderDeliverySettingsForm();
  renderContentEditor();
  renderLocationOptions();
  restoreCheckoutDetails();
  queueReveal();
}

function renderCategories() {
  const select = $("#categoryFilter");
  const current = select.value || "all";
  const categories = ["all", ...categoryOptions()];
  select.innerHTML = categories.map((cat) => `<option value="${cat}">${cat === "all" ? t("all") : cat}</option>`).join("");
  select.value = categories.includes(current) ? current : "all";
  renderAdminCategories();
}

function categoryOptions() {
  return [...new Set([...products.map((item) => item.category), ...customCategories].filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function renderAdminCategories(selected = $("#adminCategory")?.value) {
  const select = $("#adminCategory");
  if (!select) return;
  const categories = categoryOptions();
  select.innerHTML = categories.map((cat) => `<option value="${cat}">${cat}</option>`).join("");
  if (selected && categories.includes(selected)) select.value = selected;
}

function addNewCategory() {
  const input = $("#adminNewCategory");
  const value = input.value.trim();
  if (!value) return;
  customCategories = [...new Set([...customCategories, value])];
  saveState();
  renderCategories();
  $("#adminCategory").value = value;
  input.value = "";
}

function filteredProducts() {
  const query = $("#searchInput").value.trim().toLowerCase();
  const category = $("#categoryFilter").value || "all";
  const sort = $("#sortSelect").value;
  const list = products.filter((item) => {
    const name = `${item.name.en} ${item.name.bn}`.toLowerCase();
    return (category === "all" || item.category === category) && name.includes(query);
  });
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);
  return list;
}

function renderProducts() {
  const visibleProducts = filteredProducts();
  $("#productGrid").innerHTML = visibleProducts.length ? visibleProducts.map((item) => {
    const wished = wishlist.includes(item.id);
    return `
      <article class="product-card">
        <button class="product-image" type="button" onclick="goProduct(${item.id})" aria-label="${t("view")} ${item.name[lang]}">
          ${mediaTag(item, item.name[lang])}
          <span class="badge ${badgeClass(item)}">${autoBadge(item)}</span>
          <span class="stock ${stockClass(item)}">${stockText(item)}</span>
        </button>
        <h3 class="product-title" role="link" tabindex="0" onclick="goProduct(${item.id})" onkeydown="if(event.key === 'Enter' || event.key === ' '){event.preventDefault();goProduct(${item.id})}">${item.name[lang]}</h3>
        <div class="product-meta"><span>${item.category}</span>${priceHtml(item)}</div>
        ${freeDeliveryLabel(item)}
        <div class="card-actions">
          <button class="icon-btn wishlist ${wished ? "active" : ""}" type="button" onclick="toggleWishlist(${item.id})" aria-label="Wishlist">♡</button>
          <button class="primary-btn" type="button" ${isAvailable(item) ? "" : "disabled"} onclick="addToCart(${item.id})">${t("add")}</button>
        </div>
      </article>`;
  }).join("") : `
    <div class="empty-state product-empty">
      <strong>${t("noProducts")}</strong>
      <button class="secondary-btn" type="button" onclick="clearProductFilters()">${t("continueShopping")}</button>
    </div>`;
  queueReveal();
}

function clearProductFilters() {
  $("#searchInput").value = "";
  $("#categoryFilter").value = "all";
  $("#sortSelect").value = "featured";
  renderProducts();
}

let featuredIndex = 0;
let featuredTimer;

function featuredProducts() {
  const picked = products
    .filter((item) => isAvailable(item))
    .sort((a, b) => ((b.sold || 0) * 4 + (b.cartAdds || 0) * 3 + (b.views || 0)) - ((a.sold || 0) * 4 + (a.cartAdds || 0) * 3 + (a.views || 0)))
    .slice(0, 8);
  return picked.length ? picked : products.slice(0, 8);
}

function renderFeaturedSlider() {
  const track = $("#featuredTrack");
  if (!track) return;
  const items = featuredProducts();
  track.innerHTML = items.map((item) => `
    <article class="featured-slide" onclick="goProduct(${item.id})">
      <div class="featured-media">
        ${mediaTag(item, item.name[lang])}
        <span class="badge ${badgeClass(item)}">${autoBadge(item)}</span>
      </div>
      <div class="featured-copy">
        <h3>${item.name[lang]}</h3>
        <p>${item.category}</p>
        ${priceHtml(item)}
      </div>
    </article>
  `).join("");
  featuredIndex = Math.min(featuredIndex, Math.max(0, items.length - 1));
  updateFeaturedSlider();
  startFeaturedSlider();
}

function updateFeaturedSlider() {
  const track = $("#featuredTrack");
  if (!track) return;
  const slide = track.querySelector(".featured-slide");
  const gap = 14;
  const width = slide ? slide.getBoundingClientRect().width + gap : 230;
  track.style.transform = `translateX(-${featuredIndex * width}px)`;
}

function moveFeatured(delta) {
  const count = featuredProducts().length;
  if (!count) return;
  featuredIndex = (featuredIndex + delta + count) % count;
  updateFeaturedSlider();
  startFeaturedSlider();
}

function startFeaturedSlider() {
  clearInterval(featuredTimer);
  featuredTimer = setInterval(() => moveFeatured(1), 4200);
}

function rememberProduct(id) {
  recentViews = [Number(id), ...recentViews.filter((itemId) => Number(itemId) !== Number(id))].slice(0, 8);
  localStorage.setItem("ubi-recent-views", JSON.stringify(recentViews));
}

function renderRecentProducts() {
  const section = $("#recentSection");
  const grid = $("#recentGrid");
  if (!section || !grid) return;
  const items = recentViews
    .map((id) => products.find((product) => product.id === Number(id)))
    .filter(Boolean)
    .slice(0, 4);
  section.hidden = !items.length;
  grid.innerHTML = items.map((item) => `
    <article class="recent-card" onclick="goProduct(${item.id})">
      <div class="recent-media">${mediaTag(item, item.name[lang])}</div>
      <div>
        <strong>${item.name[lang]}</strong>
        <span>${item.category}</span>
        ${priceHtml(item)}
      </div>
    </article>
  `).join("");
}

function goProduct(id) {
  const nextHash = `#product-${id}`;
  if (location.hash === nextHash) {
    renderRoute();
    return;
  }
  location.hash = nextHash;
}

function productMediaSrc(item) {
  return item.images?.[0] || item.image || item.media || item.video || "";
}

function productThumbSrc(item) {
  return item.thumbnail || item.thumbnails?.[0] || item.images?.[0] || item.image || item.media || item.video || "";
}

function mediaTag(item, alt, className = "", useThumb = true) {
  const src = useThumb ? productThumbSrc(item) : productMediaSrc(item);
  const type = String(src).startsWith("data:video") || /\.(mp4|webm|ogg)(\?|$)/i.test(src) ? "video" : "image";
  if (type === "video") {
    return `<video class="${className}" src="${src}" muted loop playsinline preload="metadata" onmouseenter="this.play()" onmouseleave="this.pause()"></video>`;
  }
  return `<img class="${className}" src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
}

function optionList(item, type) {
  const values = type === "color" ? item.colors : item.sizes;
  return values?.length ? values : ["Standard"];
}

function cartKey(id, color = "Standard", size = "Standard") {
  return `${id}::${encodeURIComponent(color)}::${encodeURIComponent(size)}`;
}

function parseCartKey(key) {
  const [id, color = "Standard", size = "Standard"] = String(key).split("::");
  return { id: Number(id), color: decodeURIComponent(color), size: decodeURIComponent(size) };
}

function normalizeCart(rawCart) {
  const next = {};
  Object.entries(rawCart || {}).forEach(([key, value]) => {
    if (typeof value === "number") {
      const product = products.find((item) => item.id === Number(key));
      if (!product) return;
      const color = optionList(product, "color")[0];
      const size = optionList(product, "size")[0];
      const normalizedKey = cartKey(product.id, color, size);
      next[normalizedKey] = { id: product.id, color, size, qty: value };
      return;
    }
    if (value && typeof value === "object") {
      const qty = Number(value.qty || 0);
      if (!qty) return;
      const normalizedKey = cartKey(value.id, value.color || "Standard", value.size || "Standard");
      next[normalizedKey] = { id: Number(value.id), color: value.color || "Standard", size: value.size || "Standard", qty };
    }
  });
  return next;
}

function cartEntries() {
  return Object.entries(cart).map(([key, item]) => {
    const details = typeof item === "number" ? { ...parseCartKey(key), qty: item } : item;
    const product = products.find((productItem) => productItem.id === Number(details.id));
    return product ? { key, product, qty: Number(details.qty || 0), color: details.color || "Standard", size: details.size || "Standard" } : null;
  }).filter((item) => item && item.qty > 0);
}

function addToCart(id, color, size, qty = 1) {
  const product = products.find((item) => item.id === id);
  if (!product || !isAvailable(product)) return;
  const selectedColor = color || optionList(product, "color")[0];
  const selectedSize = size || optionList(product, "size")[0];
  const amount = Math.max(1, Number(qty) || 1);
  const key = cartKey(id, selectedColor, selectedSize);
  animateToCart(product);
  cart[key] = cart[key] || { id, color: selectedColor, size: selectedSize, qty: 0 };
  cart[key].qty += amount;
  product.cartAdds = (product.cartAdds || 0) + amount;
  saveState();
  renderCart();
  try {
    renderProducts();
    refreshOpenDetail();
  } catch (error) {
    console.error("Non-critical product redraw failed:", error);
  }
  showToast(`${product.name[lang]} added to cart`);
}

function addSelectedToCart(id, openCart = false) {
  const color = document.querySelector(".option-pill.active[data-option='color']")?.dataset.value || "";
  const size = document.querySelector(".option-pill.active[data-option='size']")?.dataset.value || "";
  const qty = Number($("#detailQty")?.value || 1);
  addToCart(id, color, size, qty);
  if (openCart) $("#cartDrawer").classList.add("open");
}

function selectProductOption(button) {
  button.closest(".option-row").querySelectorAll(".option-pill").forEach((node) => node.classList.remove("active"));
  button.classList.add("active");
}

function changeDetailQty(delta) {
  const input = $("#detailQty");
  if (!input) return;
  input.value = Math.max(1, Number(input.value || 1) + delta);
}

function changeQty(key, delta) {
  if (!cart[key]) return;
  cart[key].qty += delta;
  if (cart[key].qty <= 0) delete cart[key];
  saveState();
  renderCart();
  try {
    refreshOpenDetail();
  } catch (error) {
    console.error("Non-critical product detail redraw failed:", error);
  }
}

function toggleWishlist(id) {
  const adding = !wishlist.includes(id);
  wishlist = adding ? [...wishlist, id] : wishlist.filter((item) => item !== id);
  saveState();
  renderProducts();
  renderWishlist();
  const product = products.find((item) => item.id === id);
  if (adding) burstHeart();
  if (product) showToast(wishlist.includes(id) ? `${product.name[lang]} saved` : `${product.name[lang]} removed`);
}

function renderWishlist() {
  $("#wishlistCount").textContent = wishlist.length;
  const items = wishlist.map((id) => products.find((item) => item.id === id)).filter(Boolean);
  $("#wishlistItems").innerHTML = items.length ? items.map((product) => `
    <div class="cart-item">
      <img src="${productThumbSrc(product)}" alt="${product.name[lang]}" loading="lazy" decoding="async">
      <div><strong>${product.name[lang]}</strong><br><span>${priceHtml(product)}</span></div>
      <div class="wishlist-actions">
        <button class="primary-btn" type="button" ${isAvailable(product) ? "" : "disabled"} onclick="addToCart(${product.id})">${t("add")}</button>
        <button class="icon-btn" type="button" onclick="toggleWishlist(${product.id})" aria-label="Remove">×</button>
      </div>
    </div>
  `).join("") : `<p>${t("empty")}</p>`;
}

function deliveryAreas() {
  return [
    { key: "insideDhaka", label: t("insideDhaka") },
    { key: "dhakaSubArea", label: t("dhakaSubArea") },
    { key: "outsideDhaka", label: t("outsideDhaka") }
  ];
}

function selectedDeliveryArea() {
  const selected = $("#customerDeliveryArea")?.value || checkoutDetails.customerDeliveryArea || "insideDhaka";
  return deliverySettings[selected] === undefined ? "insideDhaka" : selected;
}

function detectDeliveryArea(district) {
  if (district === "Dhaka") return "insideDhaka";
  if (["Gazipur", "Narayanganj", "Narsingdi", "Manikganj", "Munshiganj"].includes(district)) return "dhakaSubArea";
  return district ? "outsideDhaka" : "insideDhaka";
}

function updateDeliveryAreaFromAddress() {
  const select = $("#customerDeliveryArea");
  const district = $("#customerDistrict")?.value || checkoutDetails.customerDistrict || "";
  if (!select) return;
  const area = detectDeliveryArea(district);
  select.value = area;
  checkoutDetails.customerDeliveryArea = area;
}

function deliveryChargeFor(areaKey = selectedDeliveryArea()) {
  return Number(deliverySettings[areaKey] ?? defaultDeliverySettings[areaKey] ?? 0);
}

function freeDeliveryLabel(item) {
  return item.freeDelivery !== false ? `<span class="delivery-chip">${t("freeDeliveryEligible")}</span>` : "";
}

function renderDeliveryAreaOptions() {
  const select = $("#customerDeliveryArea");
  if (!select) return;
  const current = checkoutDetails.customerDeliveryArea || select.value || "insideDhaka";
  select.innerHTML = deliveryAreas().map((area) => `<option value="${area.key}">${area.label} - ${money(deliveryChargeFor(area.key))}</option>`).join("");
  select.value = deliverySettings[current] === undefined ? "insideDhaka" : current;
  select.disabled = true;
  updateDeliveryAreaFromAddress();
}

function renderDeliverySettingsForm() {
  if (!$("#deliverySettingsForm")) return;
  $("#deliveryInsideDhaka").value = deliveryChargeFor("insideDhaka");
  $("#deliveryDhakaSubArea").value = deliveryChargeFor("dhakaSubArea");
  $("#deliveryOutsideDhaka").value = deliveryChargeFor("outsideDhaka");
}

function applySiteSettings() {
  const heroImg = document.querySelector(".hero-media img");
  if (heroImg) heroImg.src = siteSettings.heroImage || defaultSiteSettings.heroImage;
  const contactLink = $("#whatsAppContact");
  if (contactLink) contactLink.href = `https://wa.me/${siteSettings.whatsappNumber || phoneNumber}`;
  renderSocialLinks();
}

function socialIcon(platform) {
  const icons = {
    facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5h2.4V5.2c-.4-.1-1.8-.2-3.4-.2-3.4 0-5.7 2.1-5.7 6v2.9H3.5v3.7h3.8V24h4.6v-6.4h3.6l.6-3.7h-4.2v-2.5c0-1.1.3-1.9 2.1-1.9Z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.7 2.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.8 2c.4 3 2.1 4.9 5.2 5.1v3.5c-1.8.2-3.4-.4-5.1-1.5v6.6c0 8.4-9.2 11-13 5-2.4-3.9-.9-10.8 6.8-11.1v3.7c-.6.1-1.3.2-1.9.5-1.8.8-2.8 2.3-2.5 4.2.4 3.6 5.1 4.7 6.7 1.4.3-.6.4-1.4.4-2.1V2h3.4Z"/></svg>`
  };
  return icons[platform] || "";
}

function renderSocialLinks() {
  const wrap = $("#socialLinks");
  if (!wrap) return;
  const links = [
    { key: "facebookUrl", platform: "facebook", label: "Facebook" },
    { key: "instagramUrl", platform: "instagram", label: "Instagram" },
    { key: "tiktokUrl", platform: "tiktok", label: "TikTok" }
  ].filter((item) => siteSettings[item.key]);
  wrap.innerHTML = links.map((item) => `
    <a class="social-link ${item.platform}" href="${escapeHtml(siteSettings[item.key])}" target="_blank" rel="noreferrer" aria-label="${item.label}" title="${item.label}">
      ${socialIcon(item.platform)}
    </a>
  `).join("");
  wrap.hidden = links.length === 0;
  const followSection = $("#followSection");
  if (followSection) followSection.hidden = links.length === 0;
}

function renderContentEditor() {
  const grid = $("#contentEditorGrid");
  if (!grid) return;
  $("#siteHeroImageUrl").value = siteSettings.heroImage || "";
  $("#siteWhatsappNumber").value = siteSettings.whatsappNumber || defaultSiteSettings.whatsappNumber;
  $("#siteCouponCode").value = siteSettings.couponCode || defaultSiteSettings.couponCode;
  $("#siteCouponPercent").value = Number(siteSettings.couponPercent ?? defaultSiteSettings.couponPercent);
  $("#siteFreeDeliveryAt").value = Number(siteSettings.freeDeliveryAt ?? defaultSiteSettings.freeDeliveryAt);
  $("#siteFacebookUrl").value = siteSettings.facebookUrl || "";
  $("#siteInstagramUrl").value = siteSettings.instagramUrl || "";
  $("#siteTiktokUrl").value = siteSettings.tiktokUrl || "";
  grid.innerHTML = editableTextKeys.map((key) => `
    <label>
      <span>${key} EN</span>
      <textarea data-content-lang="en" data-content-key="${key}" rows="2">${escapeHtml(customText.en?.[key] || text.en[key] || "")}</textarea>
    </label>
    <label>
      <span>${key} BN</span>
      <textarea data-content-lang="bn" data-content-key="${key}" rows="2">${escapeHtml(customText.bn?.[key] || text.bn[key] || "")}</textarea>
    </label>
  `).join("");
}

async function saveContentSettings(event) {
  event.preventDefault();
  const imageFile = $("#siteHeroImage").files[0];
  siteSettings.heroImage = imageFile ? await fileToDataUrl(imageFile) : ($("#siteHeroImageUrl").value.trim() || defaultSiteSettings.heroImage);
  siteSettings.whatsappNumber = $("#siteWhatsappNumber").value.trim() || defaultSiteSettings.whatsappNumber;
  siteSettings.couponCode = $("#siteCouponCode").value.trim().toUpperCase() || defaultSiteSettings.couponCode;
  siteSettings.couponPercent = Math.max(0, Math.min(100, Number($("#siteCouponPercent").value || defaultSiteSettings.couponPercent)));
  siteSettings.freeDeliveryAt = Math.max(0, Number($("#siteFreeDeliveryAt").value || defaultSiteSettings.freeDeliveryAt));
  siteSettings.facebookUrl = $("#siteFacebookUrl").value.trim();
  siteSettings.instagramUrl = $("#siteInstagramUrl").value.trim();
  siteSettings.tiktokUrl = $("#siteTiktokUrl").value.trim();
  customText = { en: {}, bn: {} };
  document.querySelectorAll("[data-content-key]").forEach((field) => {
    const contentLang = field.dataset.contentLang;
    const key = field.dataset.contentKey;
    customText[contentLang][key] = field.value.trim();
  });
  $("#siteHeroImage").value = "";
  $("#siteHeroImageNote").textContent = "";
  saveState();
  translatePage();
  showToast("Website content saved");
  celebrate($("#adminDialog"), 14);
}

function previewSiteHeroImage() {
  const file = $("#siteHeroImage").files[0];
  $("#siteHeroImageNote").textContent = file ? `Selected: ${file.name}` : "";
}

function saveDeliverySettings(event) {
  event.preventDefault();
  deliverySettings = {
    insideDhaka: Number($("#deliveryInsideDhaka").value || 0),
    dhakaSubArea: Number($("#deliveryDhakaSubArea").value || 0),
    outsideDhaka: Number($("#deliveryOutsideDhaka").value || 0)
  };
  saveState();
  renderDeliveryAreaOptions();
  renderCart();
  showToast("Delivery charges saved");
}

function totals() {
  const entries = cartEntries();
  const sellingSubtotal = entries.reduce((sum, item) => {
    return sum + item.product.price * item.qty;
  }, 0);
  const regularSubtotal = entries.reduce((sum, item) => {
    return sum + (item.product.regularPrice || item.product.price) * item.qty;
  }, 0);
  const freeEligibleSubtotal = entries.reduce((sum, item) => {
    return sum + (item.product.freeDelivery !== false ? item.product.price * item.qty : 0);
  }, 0);
  const nonEligibleProductCount = new Set(entries.filter((item) => item.product.freeDelivery === false).map((item) => item.product.id)).size;
  const productDiscount = Math.max(0, regularSubtotal - sellingSubtotal);
  const couponDiscount = couponApplied ? Math.round(freeEligibleSubtotal * (Number(siteSettings.couponPercent || 0) / 100)) : 0;
  const discount = productDiscount + couponDiscount;
  const freeLimit = Number(siteSettings.freeDeliveryAt || freeDeliveryAt);
  const baseDelivery = deliveryChargeFor();
  const eligibleDelivery = freeEligibleSubtotal > 0 && freeEligibleSubtotal < freeLimit ? baseDelivery : 0;
  const nonEligibleDelivery = nonEligibleProductCount * baseDelivery;
  const delivery = sellingSubtotal === 0 ? 0 : eligibleDelivery + nonEligibleDelivery;
  return { subtotal: regularSubtotal, sellingSubtotal, freeEligibleSubtotal, nonEligibleProductCount, productDiscount, couponDiscount, discount, delivery, total: sellingSubtotal - couponDiscount + delivery };
}

function renderCart() {
  const entries = cartEntries();
  const nextCartCount = entries.reduce((sum, item) => sum + item.qty, 0);
  $("#openCart").classList.toggle("has-items", nextCartCount > 0);
  $("#cartCount").textContent = nextCartCount;
  if (nextCartCount !== lastCartCount) {
    popElement($("#cartCount"));
    lastCartCount = nextCartCount;
  }
  $("#cartItems").innerHTML = entries.length ? entries.map(({ key, product, qty, color, size }) => {
    return `
      <div class="cart-item">
        <img src="${productThumbSrc(product)}" alt="${product.name[lang]}" loading="lazy" decoding="async">
        <div>
          <strong>${product.name[lang]}</strong>
          <span class="cart-options">${t("color")}: ${escapeHtml(color)} · ${t("size")}: ${escapeHtml(size)}</span>
          <span>${priceHtml(product)}</span>
        </div>
        <div class="qty">
          <button type="button" onclick="changeQty('${key}', -1)">-</button>
          <span>${qty}</span>
          <button type="button" onclick="changeQty('${key}', 1)">+</button>
        </div>
      </div>`;
  }).join("") : `
    <div class="empty-state cart-empty">
      <strong>${t("empty")}</strong>
      <span>${t("emptyCartHelp")}</span>
      <a class="secondary-btn" href="#products" onclick="document.querySelector('#cartDrawer').classList.remove('open')">${t("continueShopping")}</a>
    </div>`;

  const amount = totals();
  animateMoney("#subtotal", amount.subtotal);
  animateMoney("#discount", amount.discount);
  animateMoney("#delivery", amount.delivery);
  animateMoney("#total", amount.total);
  renderCouponStatus();
  const freeLimit = Number(siteSettings.freeDeliveryAt || freeDeliveryAt);
  const progress = freeLimit ? Math.min(100, (amount.freeEligibleSubtotal / freeLimit) * 100) : 100;
  $("#freeProgress").style.width = `${progress}%`;
  $("#freeText").textContent = amount.freeEligibleSubtotal >= freeLimit ? t("freeDone") : t("freeLeft").replace("{amount}", money(freeLimit - amount.freeEligibleSubtotal));
  const freeUnlocked = amount.freeEligibleSubtotal >= freeLimit && amount.freeEligibleSubtotal > 0;
  if (freeUnlocked && !freeDeliveryWasUnlocked) {
    celebrate($("#freeProgress"), 12);
    showToast(t("freeDone"));
  }
  freeDeliveryWasUnlocked = freeUnlocked;
}

function renderCouponStatus(animate = false) {
  const status = $("#couponStatus");
  const box = document.querySelector(".coupon-box");
  if (!status || !box) return;
  const active = couponApplied;
  status.textContent = active ? t("couponApplied").replace("{percent}", Number(siteSettings.couponPercent || 0)) : "";
  box.classList.toggle("applied", active);
  status.classList.toggle("applied", active);
  if (animate && active) {
    status.classList.remove("applied");
    void status.offsetWidth;
    status.classList.add("applied");
  }
}

function applyCouponCode() {
  $("#cartDrawer").classList.add("open");
  const code = prompt(t("couponCode"));
  if (code === null) return;
  $("#couponInput").value = code.trim();
  applyCartCoupon();
}

function applyCartCoupon() {
  couponApplied = $("#couponInput").value.trim().toUpperCase() === String(siteSettings.couponCode || defaultSiteSettings.couponCode).toUpperCase();
  const amount = totals();
  if (couponApplied && amount.freeEligibleSubtotal <= 0) {
    couponApplied = false;
    showToast("Coupon works on eligible items only");
  }
  renderCart();
  renderCouponStatus(couponApplied);
  if (couponApplied) {
    $("#couponInput").value = "";
    celebrate($("#couponStatus"), 14);
  } else {
    showToast("Coupon not valid");
  }
}

function openProduct(id) {
  const item = products.find((product) => product.id === id);
  if (!item) return;
  renderProductDetail(item);
  item.views = (item.views || 0) + 1;
  rememberProduct(item.id);
  saveState();
  try {
    renderProducts();
    renderRecentProducts();
  } catch (error) {
    console.error("Non-critical product list redraw failed:", error);
  }
}

function detailMediaTag(item) {
  const src = item.video || item.images?.[0] || item.image || item.media;
  const type = item.video ? "video" : "image";
  if (type === "video") return `<video src="${src}" controls playsinline poster="${item.images?.[0] || item.image || ""}"></video>`;
  return `<img src="${src}" alt="${item.name[lang]}">`;
}

function galleryThumbs(item) {
  const images = item.images?.length ? item.images : [item.image || item.media].filter(Boolean);
  const thumbs = item.thumbnails?.length ? item.thumbnails : images;
  return images.map((src, index) => `<button class="gallery-thumb" type="button" data-src="${encodeURIComponent(src)}" onclick="setDetailImage(${item.id}, this.dataset.src)"><img src="${thumbs[index] || src}" alt="${item.name[lang]}" loading="lazy" decoding="async"></button>`).join("");
}

function setDetailImage(id, encodedSrc) {
  const item = products.find((product) => product.id === Number(id));
  if (!item) return;
  const src = decodeURIComponent(encodedSrc);
  const media = document.querySelector(".detail-media");
  media.classList.remove("media-switch");
  void media.offsetWidth;
  media.classList.add("media-switch");
  media.innerHTML = `<img src="${src}" alt="${item.name[lang]}">`;
}

function renderProductDetail(item) {
  const related = products.filter((product) => product.id !== item.id && product.category === item.category).slice(0, 4);
  const fallbackRelated = related.length ? related : products.filter((product) => product.id !== item.id).slice(0, 4);
  const description = item.description?.[lang]?.trim() || item.description?.en?.trim() || t("detailDesc");
  const colors = optionList(item, "color");
  const sizes = optionList(item, "size");
  $("#productDetailPage").innerHTML = `
    <a class="secondary-btn" href="#products">${t("backProducts")}</a>
    <div class="detail-shell">
      <div>
        <div class="detail-media">${detailMediaTag(item)}</div>
        <div class="gallery-strip">${galleryThumbs(item)}</div>
      </div>
      <div class="detail-info">
        <div>
          <p class="eyebrow">${item.category} · ${autoBadge(item)}</p>
          <h1>${item.name[lang]}</h1>
        </div>
        <div class="detail-price">${priceHtml(item, "price-stack detail-price-stack")}</div>
        <div class="detail-promise">
          <span>${t("trustDelivery")}</span>
          <span>${t("trustCod")}</span>
          <span>${t("trustChat")}</span>
        </div>
        ${item.freeDelivery !== false ? `<span class="detail-delivery-chip">${freeDeliveryLabel(item)}</span>` : ""}
        <article class="detail-description">
          <h3>${t("productInfo")}</h3>
          <p class="detail-desc">${description.replace(/\n/g, "<br>")}</p>
        </article>
        <p>${stockText(item)} · ${t("statViews")}: ${item.views || 0} · ${t("statSold")}: ${item.sold || 0}</p>
        <div class="product-options">
          <strong>${t("color")}</strong>
          <div class="option-row">${colors.map((color, index) => `<button class="option-pill ${index === 0 ? "active" : ""}" type="button" data-option="color" data-value="${escapeHtml(color)}" onclick="selectProductOption(this)">${escapeHtml(color)}</button>`).join("")}</div>
          <strong>${t("size")}</strong>
          <div class="option-row">${sizes.map((size, index) => `<button class="option-pill ${index === 0 ? "active" : ""}" type="button" data-option="size" data-value="${escapeHtml(size)}" onclick="selectProductOption(this)">${escapeHtml(size)}</button>`).join("")}</div>
        </div>
        <div class="detail-actions">
          <div class="quantity-box"><span>${t("qty")}</span><button type="button" onclick="changeDetailQty(-1)">-</button><input id="detailQty" type="number" min="1" value="1" aria-label="${t("qty")}"><button type="button" onclick="changeDetailQty(1)">+</button></div>
          <button class="primary-btn" type="button" ${isAvailable(item) ? "" : "disabled"} onclick="addSelectedToCart(${item.id})">${t("addCart")}</button>
          <button class="secondary-btn buy-now-btn" type="button" ${isAvailable(item) ? "" : "disabled"} onclick="addSelectedToCart(${item.id}, true)">${t("buyNow")}</button>
          <button class="secondary-btn" type="button" onclick="shareProduct(${item.id})">${t("share")}</button>
        </div>
        <div class="detail-blocks">
          <article class="detail-block"><h3>${t("deliveryInfo")}</h3><p>${t("detailDelivery")}</p></article>
          <article class="detail-block"><h3>${t("returnInfo")}</h3><p>${t("detailReturn")}</p></article>
          <article class="detail-block"><h3>${t("supportInfo")}</h3><p>${t("detailSupport")}</p></article>
          <article class="review-card"><h3>${t("reviews")}</h3><p>${t("reviewSample")}</p></article>
        </div>
      </div>
    </div>
    <div class="related-wrap">
      <div class="section-head">
        <div><p class="eyebrow">${item.category}</p><h2>${t("relatedProducts")}</h2></div>
      </div>
      <div class="related-grid">
        ${fallbackRelated.map((product) => `
          <article class="product-card">
            <button class="product-image" type="button" onclick="goProduct(${product.id})" aria-label="${t("view")} ${product.name[lang]}">
              ${mediaTag(product, product.name[lang])}
              <span class="badge ${badgeClass(product)}">${autoBadge(product)}</span>
            </button>
            <h3 class="product-title">${product.name[lang]}</h3>
            <div class="product-meta"><span>${product.category}</span>${priceHtml(product)}</div>
          </article>
        `).join("")}
      </div>
    </div>`;
  queueReveal();
}

function renderRoute() {
  if (location.hash === "#admin") {
    openAdminPanel();
    history.replaceState(null, "", "#home");
    return;
  }
  const match = location.hash.match(/^#product-(\d+)/);
  const detailPage = $("#productDetailPage");
  const shopSections = [
    $(".hero"),
    $(".trust-strip"),
    $("#offers"),
    $(".deal-band"),
    $("#featuredSliderWrap"),
    $(".shop-tools"),
    $("#productGrid"),
    $("#recentSection"),
    $(".info-grid"),
    $(".contact")
  ];
  if (!match) {
    detailPage.hidden = true;
    shopSections.forEach((section) => section.hidden = false);
    renderRecentProducts();
    return;
  }
  const item = products.find((product) => product.id === Number(match[1]));
  if (!item) {
    location.hash = "products";
    return;
  }
  detailPage.hidden = false;
  detailPage.classList.remove("page-enter");
  void detailPage.offsetWidth;
  detailPage.classList.add("page-enter");
  shopSections.forEach((section) => section.hidden = true);
  openProduct(item.id);
  detailPage.scrollIntoView({ behavior: "smooth", block: "start" });
}

function refreshOpenDetail() {
  const match = location.hash.match(/^#product-(\d+)/);
  if (!match || $("#productDetailPage").hidden) return;
  const item = products.find((product) => product.id === Number(match[1]));
  if (item) renderProductDetail(item);
}

function shareProduct(id) {
  const item = products.find((product) => product.id === id);
  const url = `${location.origin}${location.pathname}#product-${id}`;
  const textValue = `${item.name[lang]} - ${money(item.price)} | Ubi Shop`;
  if (navigator.share) {
    navigator.share({ title: item.name[lang], text: textValue, url }).catch(() => {});
    return;
  }
  navigator.clipboard?.writeText(`${textValue} ${url}`);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve("");
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function filesToDataUrls(files) {
  return Promise.all([...files].map(fileToDataUrl));
}

function splitOptions(value, fallback) {
  const items = value.split(",").map((item) => item.trim()).filter(Boolean);
  return items.length ? items : fallback;
}

function clearAdminForm() {
  $("#adminForm").reset();
  $("#adminId").value = "";
  stagedImages = [];
  renderAdminCategories();
  $("#adminFreeDelivery").checked = true;
  updateUploadPreview();
  updateAdminDiscountNote();
}

function renderAdminList() {
  const list = $("#adminList");
  if (!list) return;
  const query = ($("#adminSearch")?.value || "").trim().toLowerCase();
  const adminProducts = products.filter((item) => {
    const haystack = `${item.name.en} ${item.name.bn} ${item.category} ${stockText(item)} ${autoBadge(item)} ${item.price}`.toLowerCase();
    return !query || haystack.includes(query);
  });
  list.innerHTML = adminProducts.length ? adminProducts.map((item) => `
    <div class="admin-row">
      ${mediaTag(item, item.name[lang])}
      <div><strong>${item.name[lang]}</strong><br><span>${stockText(item)} · ${autoBadge(item)} · ${item.category} · ${money(item.price)} · ${t("statViews")}: ${item.views || 0} · ${t("statSold")}: ${item.sold || 0}</span></div>
      <button class="secondary-btn" type="button" onclick="editProduct(${item.id})">${t("adminEdit")}</button>
      <button class="icon-btn" type="button" onclick="deleteProduct(${item.id})" aria-label="${t("adminDelete")}">×</button>
    </div>
  `).join("") : `<div class="empty-state admin-empty"><strong>${t("adminNoProducts")}</strong></div>`;
  queueReveal();
}

let revealObserver;

function setupReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  queueReveal();
}

function queueReveal() {
  if (!revealObserver) return;
  document.querySelectorAll(".product-card, .info-grid article, .deal-band, .contact, .section-head, .detail-block, .review-card, .detail-description, .related-wrap").forEach((node, index) => {
    if (node.classList.contains("visible")) return;
    node.classList.add("reveal");
    node.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
    revealObserver.observe(node);
  });
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2100);
}

function popElement(node) {
  if (!node) return;
  node.classList.remove("pop-bounce");
  void node.offsetWidth;
  node.classList.add("pop-bounce");
}

function animateMoney(selector, value) {
  const node = $(selector);
  if (!node) return;
  const current = Number(node.dataset.value || 0);
  const next = Number(value || 0);
  node.dataset.value = String(next);
  if (current === next) {
    node.textContent = money(next);
    return;
  }
  const start = performance.now();
  const duration = 420;
  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    node.textContent = money(Math.round(current + (next - current) * eased));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function burstHeart() {
  const button = event?.target?.closest?.(".wishlist");
  const rect = button?.getBoundingClientRect();
  const origin = rect ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 } : { x: innerWidth / 2, y: innerHeight / 2 };
  for (let i = 0; i < 8; i++) {
    const bit = document.createElement("span");
    bit.className = "heart-bit";
    bit.textContent = "♡";
    bit.style.left = `${origin.x}px`;
    bit.style.top = `${origin.y}px`;
    bit.style.setProperty("--x", `${Math.cos(i / 8 * Math.PI * 2) * 42}px`);
    bit.style.setProperty("--y", `${Math.sin(i / 8 * Math.PI * 2) * 42}px`);
    document.body.appendChild(bit);
    bit.addEventListener("animationend", () => bit.remove(), { once: true });
  }
}

function celebrate(anchor, count = 12) {
  const rect = anchor?.getBoundingClientRect?.() || { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 };
  for (let i = 0; i < count; i++) {
    const dot = document.createElement("span");
    dot.className = "confetti-dot";
    dot.style.left = `${rect.left + rect.width / 2}px`;
    dot.style.top = `${rect.top + rect.height / 2}px`;
    dot.style.setProperty("--x", `${(Math.random() - .5) * 130}px`);
    dot.style.setProperty("--y", `${-35 - Math.random() * 80}px`);
    dot.style.setProperty("--r", `${Math.random() * 240 - 120}deg`);
    document.body.appendChild(dot);
    dot.addEventListener("animationend", () => dot.remove(), { once: true });
  }
}

function animateToCart(product) {
  const target = $("#openCart");
  if (!target) return;
  const thumbSrc = productThumbSrc(product);
  const source = [...document.querySelectorAll(".product-card img")].find((img) => img.getAttribute("src") === thumbSrc || img.src.endsWith(thumbSrc));
  const start = source?.getBoundingClientRect();
  const end = target.getBoundingClientRect();
  if (!start || !end) return;
  const flyer = document.createElement("img");
  flyer.className = "cart-flyer";
  flyer.src = thumbSrc;
  flyer.style.left = `${start.left + start.width / 2 - 22}px`;
  flyer.style.top = `${start.top + start.height / 2 - 22}px`;
  flyer.style.setProperty("--tx", `${end.left + end.width / 2 - start.left - start.width / 2}px`);
  flyer.style.setProperty("--ty", `${end.top + end.height / 2 - start.top - start.height / 2}px`);
  document.body.appendChild(flyer);
  flyer.addEventListener("animationend", () => flyer.remove(), { once: true });
}

function setupProInteractions() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".icon-btn, .cart-button, .primary-btn, .secondary-btn");
    if (!button || button.disabled) return;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    button.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  });

  document.addEventListener("mousemove", (event) => {
    const card = event.target.closest(".product-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - .5) * -8;
    card.style.setProperty("--tilt-x", `${y}deg`);
    card.style.setProperty("--tilt-y", `${x}deg`);
  });

  document.addEventListener("mouseleave", (event) => {
    const card = event.target.closest?.(".product-card");
    if (!card) return;
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
  }, true);
}

function editProduct(id) {
  const item = products.find((product) => product.id === id);
  if (!item) return;
  $("#adminId").value = item.id;
  $("#adminNameEn").value = item.name.en;
  $("#adminNameBn").value = item.name.bn;
  $("#adminDescEn").value = item.description?.en || "";
  $("#adminDescBn").value = item.description?.bn || "";
  renderAdminCategories(item.category);
  $("#adminRegularPrice").value = item.regularPrice || item.price;
  $("#adminPrice").value = item.price;
  updateAdminDiscountNote();
  $("#adminStock").value = item.stockStatus || "in";
  $("#adminColors").value = (item.colors || []).join(", ");
  $("#adminSizes").value = (item.sizes || []).join(", ");
  $("#adminFreeDelivery").checked = item.freeDelivery !== false;
  stagedImages = [...(item.images || [])];
  renderStagedImages();
  $("#videoPickNote").textContent = item.video ? t("selectedVideo").replace("{name}", "saved video") : "";
}

function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  recentViews = recentViews.filter((itemId) => Number(itemId) !== Number(id));
  Object.keys(cart).forEach((key) => {
    if (cart[key]?.id === id || parseCartKey(key).id === id) delete cart[key];
  });
  wishlist = wishlist.filter((item) => item !== id);
  saveState(true);
  renderCategories();
  renderProducts();
  renderCart();
  renderWishlist();
  renderFeaturedSlider();
  renderRecentProducts();
  renderAdminList();
}

async function saveProduct(event) {
  event.preventDefault();
  const id = Number($("#adminId").value) || Date.now();
  const existing = products.find((item) => item.id === id);
  const videoUpload = $("#adminVideoUpload").files[0];
  const video = videoUpload ? await fileToDataUrl(videoUpload) : existing?.video || "";
  const images = stagedImages.length ? stagedImages : existing?.images?.length ? existing.images : existing?.image ? [existing.image] : ["https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80"];
  const primaryImage = images[0];
  const product = {
    id,
    category: $("#adminCategory").value.trim(),
    name: { en: $("#adminNameEn").value.trim(), bn: $("#adminNameBn").value.trim() },
    description: { en: $("#adminDescEn").value.trim(), bn: $("#adminDescBn").value.trim() },
    regularPrice: Number($("#adminRegularPrice").value),
    price: Number($("#adminPrice").value),
    stock: $("#adminStock").value === "out" ? 0 : 999,
    stockStatus: $("#adminStock").value,
    image: primaryImage,
    images,
    video,
    media: video || primaryImage,
    mediaType: video ? "video" : "image",
    views: existing?.views || 0,
    cartAdds: existing?.cartAdds || 0,
    sold: existing?.sold || 0,
    createdAt: existing?.createdAt || Date.now(),
    colors: splitOptions($("#adminColors").value, ["Standard"]),
    sizes: splitOptions($("#adminSizes").value, ["Standard"]),
    freeDelivery: $("#adminFreeDelivery").checked
  };
  products = products.some((item) => item.id === id) ? products.map((item) => item.id === id ? product : item) : [product, ...products];
  customCategories = [...new Set([...customCategories, product.category])];
  saveState(true);
  clearAdminForm();
  renderCategories();
  renderProducts();
  renderCart();
  renderWishlist();
  renderFeaturedSlider();
  renderRecentProducts();
  renderAdminList();
  showToast("Product saved");
  celebrate($("#adminDialog"), 18);
}

async function updateUploadPreview() {
  const imageFile = $("#adminImageUpload").files[0];
  const videoFile = $("#adminVideoUpload").files[0];
  $("#videoPickNote").textContent = videoFile ? t("selectedVideo").replace("{name}", videoFile.name) : "";
  if (imageFile) {
    stagedImages.push(await fileToDataUrl(imageFile));
    $("#adminImageUpload").value = "";
  }
  renderStagedImages();
}

function renderStagedImages() {
  $("#imagePickNote").textContent = stagedImages.length ? t("selectedImages").replace("{count}", stagedImages.length) : t("noImages");
  $("#imagePreviewGrid").innerHTML = stagedImages.map((src, index) => `
    <div class="admin-preview-item">
      <img src="${src}" alt="Product picture ${index + 1}">
      <div class="admin-preview-actions">
        <button type="button" onclick="moveStagedImage(${index}, -1)">↑</button>
        <button type="button" onclick="moveStagedImage(${index}, 1)">↓</button>
        <button type="button" onclick="removeStagedImage(${index})">×</button>
      </div>
    </div>
  `).join("");
}

function moveStagedImage(index, delta) {
  const next = index + delta;
  if (next < 0 || next >= stagedImages.length) return;
  [stagedImages[index], stagedImages[next]] = [stagedImages[next], stagedImages[index]];
  renderStagedImages();
}

function removeStagedImage(index) {
  stagedImages.splice(index, 1);
  renderStagedImages();
}

function exportShopData() {
  const payload = {
    app: "ubi-shop-products",
    version: 1,
    exportType: "products-only",
    savedAt: new Date().toISOString(),
    products,
    customCategories
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ubi-shop-products-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Product data exported");
}

function exportFullWebsiteData() {
  const payload = {
    app: "ubi-shop-full-website",
    version: 1,
    exportType: "publish-ready",
    savedAt: new Date().toISOString(),
    products,
    customCategories,
    deliverySettings,
    siteSettings,
    customText,
    recentViews,
    language: lang
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ubi-shop-full-website-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Full website data exported");
}

function importShopData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data.products)) throw new Error("Invalid backup");
      products = migrateProducts(data.products);
      customCategories = Array.isArray(data.customCategories) ? data.customCategories : [];
      cart = normalizeCart(cart);
      wishlist = wishlist.filter((id) => products.some((product) => product.id === Number(id)));
      recentViews = recentViews.filter((id) => products.some((product) => product.id === Number(id)));
      saveState(true);
      renderCategories();
      renderFeaturedSlider();
      renderProducts();
      renderRecentProducts();
      renderRoute();
      renderCart();
      renderWishlist();
      renderAdminList();
      renderDeliveryAreaOptions();
      renderDeliverySettingsForm();
      renderContentEditor();
      showToast("Backup imported");
      celebrate($("#adminDialog"), 18);
    } catch {
      showToast("Backup file not valid");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function updateAdminDiscountNote() {
  const regular = Number($("#adminRegularPrice")?.value || 0);
  const selling = Number($("#adminPrice")?.value || 0);
  const note = $("#adminDiscountNote");
  if (!note) return;
  if (regular > selling && selling > 0) {
    note.textContent = `${Math.round(((regular - selling) / regular) * 100)}% ${t("off")}`;
  } else {
    note.textContent = "";
  }
}

function openAdminPanel() {
  if (sessionStorage.getItem("ubi-admin-unlocked") !== "yes") {
    const enteredPassword = prompt("Admin password");
    if (enteredPassword === null) return;
    if (enteredPassword !== adminPassword) {
      showToast("Wrong admin password");
      return;
    }
    sessionStorage.setItem("ubi-admin-unlocked", "yes");
  }
  const dialog = $("#adminDialog");
  if (!dialog.open) dialog.showModal();
}

let brandTapCount = 0;

function handleBrandSecretTap() {
  brandTapCount += 1;
  clearTimeout(handleBrandSecretTap.timer);
  handleBrandSecretTap.timer = setTimeout(() => {
    brandTapCount = 0;
  }, 1200);
  if (brandTapCount >= 3) {
    brandTapCount = 0;
    openAdminPanel();
  }
}

function checkout() {
  const entries = cartEntries();
  if (!entries.length) return;
  const form = $("#checkoutForm");
  validatePhoneNumber();
  if (!form.reportValidity()) return;
  const customerName = $("#customerName").value.trim();
  const customerPhone = $("#customerPhone").value.trim();
  const customerDeliveryArea = $("#customerDeliveryArea").value;
  const customerDeliveryLabel = deliveryAreas().find((area) => area.key === customerDeliveryArea)?.label || customerDeliveryArea;
  const customerDistrict = $("#customerDistrict").value;
  const customerUpazila = $("#customerUpazila").value;
  const customerAddress = $("#customerAddress").value.trim();
  const customerNote = $("#customerNote").value.trim();
  persistCheckoutDetails();
  const pageUrl = location.origin === "null" ? location.href.split("#")[0] : `${location.origin}${location.pathname}`;
  const lines = entries.map(({ product, qty, color, size }) => {
    const saved = Math.max(0, (product.regularPrice || product.price) - product.price) * qty;
    const productLink = `${pageUrl}#product-${product.id}`;
    return `- ${product.name.en} | Color: ${color} | Size: ${size} | Qty: ${qty} = ${money(product.price * qty)}${saved ? ` (saved ${money(saved)})` : ""}\n  Product link: ${productLink}`;
  });
  const amount = totals();
  const message = [
    "Hello Ubi Shop, I want to order:",
    "",
    ...lines,
    "",
    `Subtotal: ${money(amount.subtotal)}`,
    `Discount: ${money(amount.discount)}`,
    `Delivery: ${customerDeliveryLabel} - ${money(amount.delivery)}`,
    `Total: ${money(amount.total)}`,
    "",
    "Customer details:",
    `Name: ${customerName}`,
    `Phone: ${customerPhone}`,
    `Delivery area: ${customerDeliveryLabel}`,
    `District: ${customerDistrict}`,
    `Upazila: ${customerUpazila}`,
    `Address: ${customerAddress}`,
    customerNote ? `Note: ${customerNote}` : "",
    "",
    t("orderConfirmLine")
  ].filter(Boolean).map(encodeURIComponent).join("%0A");
  entries.forEach(({ product, qty }) => {
    if (product) product.sold = (product.sold || 0) + qty;
  });
  saveState(true);
  renderProducts();
  renderAdminList();
  window.open(`https://wa.me/${siteSettings.whatsappNumber || phoneNumber}?text=${message}`, "_blank");
}

function validatePhoneNumber() {
  const input = $("#customerPhone");
  if (!input) return true;
  input.value = input.value.replace(/\D/g, "").slice(0, 11);
  const valid = /^\d{11}$/.test(input.value);
  input.setCustomValidity(valid ? "" : t("phoneError"));
  $("#phoneError")?.classList.toggle("show", input.value.length > 0 && !valid);
  return valid;
}

function renderLocationOptions() {
  const districtSelect = $("#customerDistrict");
  const locations = typeof BD_LOCATIONS === "undefined" ? [] : BD_LOCATIONS;
  if (!districtSelect || !Array.isArray(locations)) return;
  const currentDistrict = checkoutDetails.customerDistrict || districtSelect.value;
  districtSelect.innerHTML = [
    `<option value="">${lang === "bn" ? "জেলা নির্বাচন করুন" : "Select district"}</option>`,
    ...locations.map((item) => `<option value="${item.district}">${item.district}</option>`)
  ].join("");
  districtSelect.value = locations.some((item) => item.district === currentDistrict) ? currentDistrict : "";
  renderUpazilaOptions();
}

function renderUpazilaOptions() {
  const districtSelect = $("#customerDistrict");
  const upazilaSelect = $("#customerUpazila");
  const locations = typeof BD_LOCATIONS === "undefined" ? [] : BD_LOCATIONS;
  if (!districtSelect || !upazilaSelect || !Array.isArray(locations)) return;
  const district = locations.find((item) => item.district === districtSelect.value);
  const currentUpazila = checkoutDetails.customerUpazila || upazilaSelect.value;
  if (!district) {
    upazilaSelect.innerHTML = `<option value="">${lang === "bn" ? "আগে জেলা নির্বাচন করুন" : "Select district first"}</option>`;
    upazilaSelect.value = "";
    upazilaSelect.disabled = true;
    return;
  }
  upazilaSelect.disabled = false;
  upazilaSelect.innerHTML = [
    `<option value="">${lang === "bn" ? "উপজেলা নির্বাচন করুন" : "Select upazila"}</option>`,
    ...district.upazilas.map((name) => `<option value="${name}">${name}</option>`)
  ].join("");
  upazilaSelect.value = district.upazilas.includes(currentUpazila) ? currentUpazila : "";
}

function persistCheckoutDetails() {
  updateDeliveryAreaFromAddress();
  checkoutDetails = {
    customerName: $("#customerName").value.trim(),
    customerPhone: $("#customerPhone").value.trim(),
    customerDeliveryArea: $("#customerDeliveryArea").value,
    customerDistrict: $("#customerDistrict").value,
    customerUpazila: $("#customerUpazila").value,
    customerAddress: $("#customerAddress").value.trim(),
    customerNote: $("#customerNote").value.trim()
  };
  localStorage.setItem("ubi-checkout-details", JSON.stringify(checkoutDetails));
}

function restoreCheckoutDetails() {
  if (!$("#checkoutForm")) return;
  $("#customerName").value = checkoutDetails.customerName || "";
  $("#customerPhone").value = checkoutDetails.customerPhone || "";
  $("#customerDistrict").value = checkoutDetails.customerDistrict || "";
  updateDeliveryAreaFromAddress();
  renderUpazilaOptions();
  $("#customerUpazila").value = checkoutDetails.customerUpazila || "";
  $("#customerAddress").value = checkoutDetails.customerAddress || "";
  $("#customerNote").value = checkoutDetails.customerNote || "";
}

function tickCountdown() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end - now);
  $("#countHours").textContent = String(Math.floor(diff / 3600000)).padStart(2, "0");
  $("#countMins").textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
  $("#countSecs").textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
}

$("#langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "bn" : "en";
  localStorage.setItem("ubi-lang", lang);
  translatePage();
});
$("#themeToggle").addEventListener("click", () => document.body.classList.toggle("dark"));
$("#openAdmin").addEventListener("click", openAdminPanel);
$("#brandMark").addEventListener("click", handleBrandSecretTap);
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "a") {
    event.preventDefault();
    openAdminPanel();
  }
});
$("#closeAdmin").addEventListener("click", () => $("#adminDialog").close());
$("#adminForm").addEventListener("submit", saveProduct);
$("#adminReset").addEventListener("click", clearAdminForm);
$("#addCategoryBtn").addEventListener("click", addNewCategory);
$("#adminImageUpload").addEventListener("change", updateUploadPreview);
$("#adminVideoUpload").addEventListener("change", updateUploadPreview);
$("#adminRegularPrice").addEventListener("input", updateAdminDiscountNote);
$("#adminPrice").addEventListener("input", updateAdminDiscountNote);
$("#adminSearch").addEventListener("input", renderAdminList);
$("#contentSettingsForm").addEventListener("submit", saveContentSettings);
$("#siteHeroImage").addEventListener("change", previewSiteHeroImage);
$("#deliverySettingsForm").addEventListener("submit", saveDeliverySettings);
$("#exportData").addEventListener("click", exportShopData);
$("#exportFullWebsite").addEventListener("click", exportFullWebsiteData);
$("#importData").addEventListener("change", importShopData);
$("#openCart").addEventListener("click", () => $("#cartDrawer").classList.add("open"));
$("#closeCart").addEventListener("click", () => $("#cartDrawer").classList.remove("open"));
$("#cartDrawer").addEventListener("click", (event) => {
  if (event.target.id === "cartDrawer") $("#cartDrawer").classList.remove("open");
});
$("#openWishlist").addEventListener("click", () => $("#wishlistDrawer").classList.add("open"));
$("#closeWishlist").addEventListener("click", () => $("#wishlistDrawer").classList.remove("open"));
$("#wishlistDrawer").addEventListener("click", (event) => {
  if (event.target.id === "wishlistDrawer") $("#wishlistDrawer").classList.remove("open");
});
$("#searchInput").addEventListener("input", renderProducts);
$("#categoryFilter").addEventListener("change", renderProducts);
$("#sortSelect").addEventListener("change", renderProducts);
$("#prevFeatured").addEventListener("click", () => moveFeatured(-1));
$("#nextFeatured").addEventListener("click", () => moveFeatured(1));
window.addEventListener("hashchange", renderRoute);
$("#couponInput").addEventListener("input", () => {
  couponApplied = false;
  renderCart();
  renderCouponStatus();
});
$("#applyCoupon").addEventListener("click", applyCouponCode);
$("#applyCartCoupon").addEventListener("click", applyCartCoupon);
$("#checkoutBtn").addEventListener("click", checkout);
["customerName", "customerPhone", "customerAddress", "customerNote", "customerUpazila"].forEach((id) => {
  $(`#${id}`).addEventListener("input", persistCheckoutDetails);
  $(`#${id}`).addEventListener("change", persistCheckoutDetails);
});
$("#customerPhone").addEventListener("input", validatePhoneNumber);
$("#customerPhone").addEventListener("blur", validatePhoneNumber);
$("#customerDistrict").addEventListener("change", () => {
  checkoutDetails.customerDistrict = $("#customerDistrict").value;
  checkoutDetails.customerUpazila = "";
  renderUpazilaOptions();
  persistCheckoutDetails();
  renderCart();
});
$("#floatWhatsApp").addEventListener("click", () => window.open(`https://wa.me/${siteSettings.whatsappNumber || phoneNumber}`, "_blank"));
$("#whatsAppContact").href = `https://wa.me/${siteSettings.whatsappNumber || phoneNumber}`;

translatePage();
setupReveal();
setupProInteractions();
tickCountdown();
setInterval(tickCountdown, 1000);
