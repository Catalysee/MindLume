const CACHE_NAME = 'meditation-app-cache-v3';
const VIDEOS_CACHE_NAME = 'meditation-videos-cache-v1';

const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, VIDEOS_CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip cross-origin requests
  if (url.origin !== self.location.origin && !event.request.url.includes('dropbox.com')) {
    return;
  }
  
  // For dropbox video requests
  if (event.request.url.includes('dropbox.com')) {
    event.respondWith(
      caches.open(VIDEOS_CACHE_NAME)
        .then((cache) => {
          return cache.match(event.request.url)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              
              // If not in cache and online, fetch and cache
              return fetch(event.request)
                .then((networkResponse) => {
                  if (networkResponse.ok) {
                    cache.put(event.request.url, networkResponse.clone());
                  }
                  return networkResponse;
                })
                .catch(() => {
                  // If offline and not in cache, return a fallback
                  console.log('Failed to fetch video and no cache available');
                });
            });
        })
    );
    return;
  }
  
  // For app shell resources
  event.respondWith(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.match(event.request)
          .then((response) => {
            // Return cached response if available
            if (response) {
              return response;
            }
            
            // Otherwise try to fetch from network
            return fetch(event.request)
              .then((networkResponse) => {
                // Cache successful responses for app resources
                if (networkResponse.ok &&
                    (event.request.url.endsWith('.html') ||
                     event.request.url.endsWith('.js') ||
                     event.request.url.endsWith('.css') ||
                     event.request.url.endsWith('.json'))) {
                  cache.put(event.request, networkResponse.clone());
                }
                return networkResponse;
              })
              .catch((error) => {
                console.error('Fetch failed:', error);
                // Return a custom offline page if needed
              });
          });
      })
  );
});
