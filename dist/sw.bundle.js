/* eslint-disable eol-last */
/* eslint-disable spaced-comment */
/* eslint-disable brace-style */
/* eslint-disable block-spacing */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable object-curly-spacing */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable one-var */
/* eslint-disable max-len */
/* eslint-disable keyword-spacing */
if (!self.define) {
    let e, i = {};
    const s = (s, n) => (s = new URL(s + ".js", n).href, i[s] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = s, e.onload = i, document.head.appendChild(e)
        } else e = s, importScripts(s), i()
    })).then((() => { let e = i[s]; if (!e) throw new Error(`Module ${s} didn’t register its module`); return e })));
    self.define = (n, o) => {
        const r = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[r]) return;
        let c = {};
        const d = e => s(e, r),
            a = { module: { uri: r }, exports: c, require: d };
        i[r] = Promise.all(n.map((e => a[e] || d(e)))).then((e => (o(...e), c)))
    }
}
define(["./workbox-3dc2bb2b"], (function(e) {
    "use strict";
    self.addEventListener("message", (e => { e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting() })), e.precacheAndRoute([{ url: "app.bundle.js", revision: "1f8e8cd882753583c4d394f2962e7096" }, { url: "app.bundle.js.LICENSE.txt", revision: "4e0e34f265fae8f33b01b27ae29d9d6f" }, { url: "images/heros/app.webmanifest", revision: "f66ec6abf87ab4bfe0c4f5f1e3370ddc" }, { url: "images/heros/favicon.png", revision: "923e1610b9d68d2445eb28d6e0f54aaa" }, { url: "images/heros/hero-image_2.jpg", revision: "49f78cae81de4f48caf1c2fe0271c828" }, { url: "images/heros/icons/icon-128x128.png", revision: "34d9d8d646af9f294d968811da10e546" }, { url: "images/heros/icons/icon-144x144.png", revision: "2dd174daa627ee198c37c9dfe8cdc34d" }, { url: "images/heros/icons/icon-152x152.png", revision: "42ee3d984a8d535d697ccbb4428e8647" }, { url: "images/heros/icons/icon-192x192.png", revision: "923e1610b9d68d2445eb28d6e0f54aaa" }, { url: "images/heros/icons/icon-384x384.png", revision: "7f775b04df567c8d90c9bad2c89e2d81" }, { url: "images/heros/icons/icon-512x512.png", revision: "f6705cd9d5d52d8483a2bf9b47cb5f60" }, { url: "images/heros/icons/icon-72x72.png", revision: "1d463ddf39f394788393e31e1f0e9dbc" }, { url: "images/heros/icons/icon-96x96.png", revision: "7619371082a792ebb06768c13bf094bf" }, { url: "images/heros/logo.jpg", revision: "041b14d7fc498baf1849ed5adc4f123c" }, { url: "index.html", revision: "ce2e18eb029b4e5168837a6a32891c2d" }], {}), e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//, new e.StaleWhileRevalidate({ cacheName: "RestaurantCatalogue", plugins: [new e.CacheableResponsePlugin({ statuses: [200] })] }), "GET")
}));
//# sourceMappingURL=sw.bundle.js.map