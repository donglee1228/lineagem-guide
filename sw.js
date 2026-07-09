/* 리니지M 코덱스 — 서비스워커 (오프라인 캐시) */
const CACHE_VERSION = 'lineagem-codex-v3';
const CORE_ASSETS = [
  './',
  './index.html',
  './데이터.js',
  './manifest.webmanifest',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/monarch.jpg',
  './assets/knight.jpg',
  './assets/elf.jpg',
  './assets/wizard.jpg',
  './assets/darkelf.jpg',
  './assets/dragonknight.jpg',
  './assets/berserker.jpg',
  './assets/gunner.jpg',
  './assets/holyknight.jpg',
  './assets/darkknight.jpg',
  './assets/magicswordsman.jpg',
  './assets/reaper.jpg',
  './assets/thundergod.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      // 개별 실패가 전체 설치를 막지 않도록 방어적으로 캐시
      Promise.allSettled(
        CORE_ASSETS.map((url) =>
          cache.add(new Request(url, { cache: 'reload' })).catch(() => null)
        )
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// 캐시 우선, 네트워크 폴백. 성공한 GET 응답은 런타임 캐시에 갱신.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const clone = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
