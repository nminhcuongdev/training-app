/* PPL Coach service worker: mở app khi không có mạng.
   Đổi VERSION mỗi lần cập nhật để điện thoại tải bản mới. */
const VERSION = "ppl-coach-v4";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
const CDN = /(^|\.)cdn\.jsdelivr\.net$|^fonts\.googleapis\.com$|^fonts\.gstatic\.com$/;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const put = res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res; };
  if (url.origin === location.origin) {
    if (req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("/")) {
      // Ưu tiên mạng để luôn có bản mới, mất mạng thì dùng bản đã lưu
      e.respondWith(fetch(req).then(put).catch(() => caches.match(req).then(m => m || caches.match("index.html"))));
    } else {
      e.respondWith(caches.match(req).then(m => m || fetch(req).then(put)));
    }
    return;
  }
  if (CDN.test(url.hostname)) {
    // Thư viện 3D và font: lấy từ bộ nhớ đệm, chưa có thì tải và lưu lại
    e.respondWith(caches.match(req).then(m => m || fetch(req).then(put)));
  }
});
