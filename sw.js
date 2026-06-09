var CACHE='estatecare-v1';
var FILES=['/estatecare-app/','/estatecare-app/index.html','/estatecare-app/admin.html','/estatecare-app/inspector.html','/estatecare-app/client.html','/estatecare-app/manifest.json'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES);}));});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));});
