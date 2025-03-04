const CACHE_NAME = 'ramadan-duas-v1';
  const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
  ];

  // تثبيت Service Worker
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(ASSETS))
    );
  });

  // استرجاع الملفات من الذاكرة المؤقتة
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => response || fetch(event.request))
    );
  });