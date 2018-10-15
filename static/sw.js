importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/294ae95b44be12b4ae47.js",
    "revision": "1764eb1facf15f609db28567ad5101e5"
  },
  {
    "url": "/_nuxt/4b3ef2e4ef547bdd723c.js",
    "revision": "3b67235346470de4eb57e1925e01d120"
  },
  {
    "url": "/_nuxt/503239bb707555d22de9.js",
    "revision": "b1d5dec4e5eb5edf1f1e25540b94f300"
  },
  {
    "url": "/_nuxt/5d2e2560b16a33b81f91.js",
    "revision": "d53885718282c5f4f493c7b2090e374e"
  },
  {
    "url": "/_nuxt/60897be689d2958df692.js",
    "revision": "8ee48f824b5b964e0929646d34f8109d"
  },
  {
    "url": "/_nuxt/71473dc835f8d913a2bd.js",
    "revision": "e01c31e55d7bde5ce5c45434d0b005d3"
  },
  {
    "url": "/_nuxt/829daed5c6e7dd6660b2.js",
    "revision": "97da2df68e8c438332c8716534a2df51"
  },
  {
    "url": "/_nuxt/d00e69d099be52555fde.js",
    "revision": "774da638fbb01ebf9c81601a4a40200a"
  },
  {
    "url": "/_nuxt/d06f7d0baad926ebda29.js",
    "revision": "dde4699deaf6b503ff0ec5e5fb088dcc"
  },
  {
    "url": "/_nuxt/f280cee338c41bd20277.js",
    "revision": "1471d8cf429439766cd9c1ec765085a5"
  }
], {
  "cacheId": "wp-vue-ssr",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





