// Service Worker para ReservasPro
const CACHE_NAME = 'reservaspro-v1.0.0';
const urlsToCache = [
    '/',
    '/dashboard/',
    '/booking.html',
    '/css/mobile-optimization.css',
    '/js/notifications.js',
    '/manifest.json'
];

// Instalación del Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache abierto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activación del Service Worker
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Eliminando cache antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Interceptar requests
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Devolver desde cache si está disponible
                if (response) {
                    return response;
                }
                
                // Clonar el request
                const fetchRequest = event.request.clone();
                
                return fetch(fetchRequest).then(function(response) {
                    // Verificar si es una respuesta válida
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // Clonar la respuesta
                    const responseToCache = response.clone();
                    
                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });
                    
                    return response;
                });
            })
    );
});

// Manejar notificaciones push
self.addEventListener('push', function(event) {
    console.log('Push recibido:', event);
    
    const options = {
        body: event.data ? event.data.text() : 'Nueva notificación de ReservasPro',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/badge-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Ver Detalles',
                icon: '/icons/checkmark.png'
            },
            {
                action: 'close',
                title: 'Cerrar',
                icon: '/icons/xmark.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('ReservasPro', options)
    );
});

// Manejar clics en notificaciones
self.addEventListener('notificationclick', function(event) {
    console.log('Notificación clickeada:', event);
    
    event.notification.close();
    
    if (event.action === 'explore') {
        // Abrir la aplicación
        event.waitUntil(
            clients.openWindow('/dashboard/')
        );
    } else if (event.action === 'close') {
        // Solo cerrar la notificación
        return;
    } else {
        // Click en el cuerpo de la notificación
        event.waitUntil(
            clients.openWindow('/dashboard/')
        );
    }
});

// Manejar notificaciones de fondo
self.addEventListener('backgroundsync', function(event) {
    console.log('Background sync:', event);
    
    if (event.tag === 'appointment-sync') {
        event.waitUntil(
            syncAppointments()
        );
    }
});

// Sincronizar citas en segundo plano
function syncAppointments() {
    return new Promise(function(resolve) {
        // Aquí se implementaría la lógica de sincronización
        console.log('Sincronizando citas...');
        resolve();
    });
}

// Manejar mensajes del cliente
self.addEventListener('message', function(event) {
    console.log('Mensaje recibido:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Manejar errores
self.addEventListener('error', function(event) {
    console.error('Error en Service Worker:', event);
});

// Manejar promesas rechazadas
self.addEventListener('unhandledrejection', function(event) {
    console.error('Promesa rechazada en Service Worker:', event);
});
