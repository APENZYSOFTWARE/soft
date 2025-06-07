const CACHE_NAME = 'goldmark-cache-v2';
const OFFLINE_URL = '/offline.html';
const MARKETING_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/images/logo.png',
  '/images/marketing-banner.jpg',
  '/fonts/Inter.woff2'
];

// Install - Cache marketing assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(MARKETING_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Fetch - Network first with cache fallback
self.addEventListener('fetch', event => {
  // API calls for analytics
  if (event.request.url.includes('/api/analytics')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // Store failed requests for later sync
          return new Response(JSON.stringify({status: 'queued'}), {
            headers: {'Content-Type': 'application/json'}
          });
        })
    );
    return;
  }

  // Marketing assets
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache new versions of files
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        return response;
      })
      .catch(() => {
        // Offline fallback
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match(OFFLINE_URL);
        }
        return caches.match(event.request);
      })
  );
});

// Background sync for marketing data
self.addEventListener('sync', event => {
  if (event.tag === 'sync-analytics') {
    event.waitUntil(syncAnalyticsData());
  }
});

async function syncAnalyticsData() {
  // Implementation for syncing pending analytics
  console.log('Syncing marketing analytics data...');
}

// Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      );
    })
  );
});
