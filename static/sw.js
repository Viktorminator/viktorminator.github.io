importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/0.nuxt.bundle.1e21cc3e89a5ba9e3346.js",
    "revision": "98bc9c2b7bf845c9b31355cd51391034"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/1.nuxt.bundle.e61f3b6840f4bbacddea.js",
    "revision": "066253401c40b918d0152040bf0e9489"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/2.nuxt.bundle.c9a684c489d3de392cfc.js",
    "revision": "acf90a57e29fcf057ec0e5ce7be1eaf4"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/3.nuxt.bundle.e2460adb55e9ba329fb5.js",
    "revision": "37e0bdb25637b7ddbd3cf09b113e9432"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/4.nuxt.bundle.57927c5b0b000ab3af40.js",
    "revision": "cd6e352976704ce26147f1710aad108b"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/5.nuxt.bundle.eb57c5fa7db1119d7d08.js",
    "revision": "c9b15f4b480fe33466fd8b1adfb586a8"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/client-manifest.json",
    "revision": "646073a36e6e0e9d3ad3621f7c47ef7e"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/manifest.89951bb2.json",
    "revision": "aafb43d28f2293966131125b0e1c7a3c"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/manifest.9301813c6663bff4304c.js",
    "revision": "cb1a04a6bb006c19620b563be9f37b2b"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/nuxt.bundle.1e677b5e58732f7fa90c.js",
    "revision": "6949e4985583631d0df3a3327d66d04a"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/server-bundle.json",
    "revision": "0be3a9f557a84881e78006b3f973d3fd"
  },
  {
    "url": "/nuxt-wordpress-pwa/_nuxt/vendor.bundle.d5747a7a20a8133a7eec.js",
    "revision": "02addd74378338a41a68743632713653"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/nuxt-wordpress-pwa\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/nuxt-wordpress-pwa\/.*/, workboxSW.strategies.networkFirst());
