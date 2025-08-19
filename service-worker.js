// اسم ذاكرة التخزين المؤقت (Cache)
const CACHE_NAME = 'holy-family-v2';

// قائمة بجميع الملفات التي يجب تخزينها
const urlsToCache = [
    '/',
    '/index.html',
    '/content.html',
    '/style.css',
    '/manifest.json',
    '/script.js',
    // ملفات HTML
    '/about.html',
    '/agpiyah.html',
    '/alrabyasou.html',
    '/articles.html',
    '/bible.html',
    '/bibleofjhon.html',
    '/bibleofluke.html',
    '/bibleofmark.html',
    '/bibleofmatthew.html',
    '/calender.html',
    '/church-history.html',
    '/media.html',
    '/mircles.html',
    '/omelnour.html',
    '/prayers.html',
    '/sermons.html',
    '/submit.html',
    '/support.html',
    '/tamagedalmasihwaldra.html',
    '/taranem.html',
    // ملفات الصور
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png',
    '/favicon.jpg',
    '/almasihwaldra.jpg',
    '/almasihwaldra2.jpg',
    '/images.jpeg',
    '/images (1).jpeg',
    '/images (2).jpeg',
    '/images (3).jpeg',
    '/img_200131_20250619.jpg',
    '/picsart_25-05-03_11-43-14-784.png',
    'https://i.imgur.com/vH9x7f3.png',
    'https://i.imgur.com/B70438i.png',
    'https://i.imgur.com/gK9xW5e.png',
    'https://i.imgur.com/N7kR1yG.png',
    'https://i.imgur.com/l7x6b9X.png',
    'https://i.imgur.com/J44QGvA.png',
    // ملفات الإنجيل (يجب أن يتم تحديثها يدويًا)
    '/gospels/john_chapter_1.html',
    '/gospels/john_chapter_2.html',
    '/gospels/john_chapter_3.html',
    '/gospels/john_chapter_4.html',
    '/gospels/john_chapter_5.html',
    '/gospels/john_chapter_6.html',
    '/gospels/john_chapter_7.html',
    '/gospels/john_chapter_8.html',
    '/gospels/john_chapter_9.html',
    '/gospels/john_chapter_10.html',
    '/gospels/john_chapter_11.html',
    '/gospels/john_chapter_12.html',
    '/gospels/john_chapter_13.html',
    '/gospels/john_chapter_14.html',
    '/gospels/john_chapter_15.html',
    '/gospels/john_chapter_16.html',
    '/gospels/john_chapter_17.html',
    '/gospels/john_chapter_18.html',
    '/gospels/john_chapter_19.html',
    '/gospels/john_chapter_20.html',
    '/gospels/john_chapter_21.html'
];

// خطوة 1: تثبيت Service Worker وتخزين الملفات
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// خطوة 2: اعتراض طلبات الشبكة وتقديمها من ذاكرة التخزين المؤقت
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

// خطوة 3: تفعيل Service Worker وتنظيف النسخ القديمة
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});