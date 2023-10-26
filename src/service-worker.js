/* eslint-disable no-restricted-globals */import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

console.log("A");

self.addEventListener('message', (event) => {
    console.error("A");
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});