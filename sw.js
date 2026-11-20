/* Service Worker der Startseite: macht die Website als App installierbar. Speichert nichts zwischen, alles kommt frisch vom Netz. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
