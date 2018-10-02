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
    "url": "/_nuxt/0.nuxt.bundle.1cbb35f4f12243f86b43.js",
    "revision": "6586d3c10610d320f105398938cab77a"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.f4a53408bb0b1fd8c846.js",
    "revision": "62a89259bf188ea41ac1a7c8850163ab"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.8c232b39dbfd6a968910.js",
    "revision": "5fb6ba4551cdf9a807af0dd2314c2179"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.e8b6a546bfbb5d9b432c.js",
    "revision": "f09d0fb3503343694c2eebee90b3bd01"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.5e8f0dd101c8ba4fb2fd.js",
    "revision": "1df9e2fa8179d6504bc41c9379754614"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.8199a93cde4551412f32.js",
    "revision": "61e33519566d250ce8345d79cdbf7501"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.a2024ec2e3fd06279280.js",
    "revision": "d6de2a95a945c097b844ee8e3a217eb8"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.0d023b5f816ba441c80e.js",
    "revision": "2a9fa4f0c88dd4e1bcda887ed6dcdcec"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "dd966f3873800d2cb0603e4df570e18f"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.40f29c2e.json",
    "revision": "1236d15be4764198f3c1a68667140062"
  },
  {
    "url": "/_nuxt/manifest.4bf7569b48d3e5dca358.js",
    "revision": "888a567a666a829393aa94a337c275e5"
  },
  {
    "url": "/_nuxt/nuxt.bundle.70f4c6629cbc9b5972ed.js",
    "revision": "97a1efbd5858d85c726601aa2b5ff3e5"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "82dd164d661cff7a5cdeab64e7e6fa12"
  },
  {
    "url": "/_nuxt/vendor.bundle.b0ba2609bd10c7a5dc41.js",
    "revision": "623dd32391f5cfea05ad7a06001bc085"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
