// Service worker minimal — cukup buat memenuhi syarat "Installable PWA" di Android/Chrome
// (Android baru mau kasih ikon aplikasi TANPA badge Chrome kalau ada file ini terdaftar)
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  // Biarin semua request jalan normal ke internet, service worker ini cuma buat syarat instalasi
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
