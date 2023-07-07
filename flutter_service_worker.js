'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "db7907ec2c728fa4deba9c0fc5970a3b",
"assets/assets/google_fonts/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/assets/google_fonts/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/assets/google_fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/google_fonts/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/assets/google_fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/google_fonts/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/assets/google_fonts/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/google_fonts/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/assets/google_fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/google_fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/google_fonts/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/assets/google_fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/google_fonts/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/assets/google_fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/google_fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/google_fonts/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/assets/google_fonts/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/google_fonts/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/assets/icons/addCircle.svg": "a453cf0df8d7b777fed90dbd430bf069",
"assets/assets/icons/addUser.svg": "a39f4fa2450ab8401050e990007ad2c4",
"assets/assets/icons/addUserOutline.svg": "dc9ffb9ae6eaedf11d455e75d37d0fd0",
"assets/assets/icons/archive.svg": "153047cb1718f285a6c887b3a71dfafc",
"assets/assets/icons/archiveDone.svg": "507cb161f94018d5d4cf19cf6d1856b5",
"assets/assets/icons/arrowUp.svg": "f8e10499ae9ddaba7b13ec778ad20abb",
"assets/assets/icons/attach_circle.svg": "7a95f4b4d9cd3561fffceccd051cac33",
"assets/assets/icons/bronze.svg": "1bf9734a4585bbd79083b6f5317e123d",
"assets/assets/icons/chat.svg": "18fdf8d2fb5f60d8a4664afc85c0c6e6",
"assets/assets/icons/circles.svg": "4dfb330848111264074f779b0392270b",
"assets/assets/icons/circlesOutline.svg": "9ab0f160f1774a867b9a2b252bac3342",
"assets/assets/icons/clearText.svg": "a10a55c58b4d1433c7a52250a2fb5f7f",
"assets/assets/icons/Close.svg": "f205a9a91f455c2f149ab3a00ddaff1d",
"assets/assets/icons/closeBlue.svg": "b19290f61c4d3aa76e3dee5f586832be",
"assets/assets/icons/closeOutline.svg": "badab8e5ff48be24da26fb506df417dd",
"assets/assets/icons/comment.svg": "58f020e175bf370eb7096aed6e921ef0",
"assets/assets/icons/commentOutline.svg": "bb2bef8f046479741ebe529a08ac905c",
"assets/assets/icons/copy.svg": "1fdfa3071d34a0d253ea0ebbbb8afcde",
"assets/assets/icons/crown.svg": "b666c4b1e077108c7a708e26f828a3dd",
"assets/assets/icons/delete.svg": "2cb154a6591fa44b2a368784ac56dda5",
"assets/assets/icons/documentText.svg": "02fcbeeeb3cf71c895807294a3981f41",
"assets/assets/icons/down.svg": "2904f363c4f31e0f41bd3dd711d96903",
"assets/assets/icons/downDone.svg": "a93031c57d121d9fb981a223b658d084",
"assets/assets/icons/eye.svg": "cde38bf763bf0a0fa990524a3799bd94",
"assets/assets/icons/facebook.svg": "3cea1c5bbbe5552312b5e825695a93f6",
"assets/assets/icons/Filters.svg": "f854d756a7eeba01f9ce80fdf27d2878",
"assets/assets/icons/global.svg": "5bc5c749c463792dd88f292765b8d692",
"assets/assets/icons/gold.svg": "4da82693efb75ddd41a4f23add22c6ed",
"assets/assets/icons/home.svg": "6207d5f3213ac3ca63aafa4bbe6c33e6",
"assets/assets/icons/imageUpload.svg": "a9b7d6c849436ad4e45dd733fd0e5d96",
"assets/assets/icons/leave.svg": "d6875bd01cb5f372d8ef4dca9621b348",
"assets/assets/icons/like.svg": "cebf9e37d400e67e826e979df8b0914f",
"assets/assets/icons/lock.svg": "1384945867600e1642694991448839ea",
"assets/assets/icons/meet.svg": "fbeef5d7c4ac0ec95b989ffa499b12f2",
"assets/assets/icons/message.svg": "5f019f45f3ff30d77742716ad63c76b1",
"assets/assets/icons/notification.svg": "1ae8751f19800bcaff100435538ec13b",
"assets/assets/icons/private.svg": "93165e8732a71fdf4ee060951e6e1fb0",
"assets/assets/icons/profile.svg": "1312d1b538b5c9f4f5e12eea44cc5387",
"assets/assets/icons/profileOutline.svg": "053349112dfe6a3a8bdff41481034b27",
"assets/assets/icons/recordCircle.svg": "4b6745371b565c7ae6d4bfce043ac96c",
"assets/assets/icons/removeUser.svg": "523958e3921caa03bbd3634024f98608",
"assets/assets/icons/Search.svg": "847cffae618843c8c4fe75569ebb25e9",
"assets/assets/icons/security.svg": "ed3439c3f5bb01670a5fd072f7292ab0",
"assets/assets/icons/share.svg": "8ae28e58aded0ce76a3176823f117616",
"assets/assets/icons/silver.svg": "943f3bafc0cd9bbbf234ceb917509327",
"assets/assets/icons/tick.svg": "023edb2319edd7577b00b1c45bf26917",
"assets/assets/icons/timeline.svg": "8a2b64f0ff33b3c9b990f7fc36e14572",
"assets/assets/icons/toggleOffCircle.svg": "9813aeee3410ec943dc686014f712d20",
"assets/assets/icons/twitter.svg": "00810512efd9daa176b2d79cccde4280",
"assets/assets/icons/Union.svg": "96e119b566d18e2aa92210a45ec2ca08",
"assets/assets/icons/up.svg": "c8c62592d77924e7c728420b591ba9a4",
"assets/assets/icons/upDone.svg": "a88af20c281c3c5dd5e0e1229d51e517",
"assets/assets/icons/user.svg": "d6a34c6e165b85bf783fca01a27af6f0",
"assets/assets/icons/userAddCircle.svg": "d8625be5690404e2a6ab7809d86ff512",
"assets/assets/icons/username.svg": "42385e73e6f1504fd859b90b1b6862fa",
"assets/assets/icons/userSimple.svg": "6cc45b75db570c83a01b9b9ea72c51e2",
"assets/assets/icons/voiceCircle.svg": "78c8a13284eb73a336f584ed952d948c",
"assets/assets/icons/whatsApp.svg": "7c62efaa373e20c852eb94c102cfe4fa",
"assets/assets/images/avatar-post.png": "107c391084c193392f2c33e80c576f14",
"assets/assets/images/avatar.png": "fd0ee51f69dfa139adfc60ce4e5ce973",
"assets/assets/images/commentEmpty.svg": "63e846e8d951b622ecd0de98a0cc0b52",
"assets/assets/images/intro-business-deal.png": "c871e5a168fe1e2f462cfef5018073bc",
"assets/assets/images/intro-puzzle.png": "3a83916f84f75648ebf2da9305be84b4",
"assets/assets/images/logo-facebook.svg": "553d61abdc393651c7b5807592509d86",
"assets/assets/images/logo-google.svg": "c50a37a6a8b846db9cd03e89072c4ffb",
"assets/assets/images/logo-linkedin.svg": "d471a13ade61fdf658bb6c16f87474c0",
"assets/assets/images/logo.svg": "8d73e6bbfb949545dabbe4fc44abfa5d",
"assets/assets/images/promoted-as-contributor-banner.png": "4428c48cb38578e3a0f325971ed5c1d2",
"assets/assets/images/splash-bg.png": "0831e931a02eaccf061e83b91c3d0369",
"assets/assets/images/start-new-position-banner.png": "10610a698abb273217d143290893df24",
"assets/FontManifest.json": "3ee9f0ca9fc3f340d8986145d82ea462",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "2873cf902e1b852c66c5e02655c4e4b3",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "77c7f7b3c14c52ffa00b48b004a2aa1d",
"/": "77c7f7b3c14c52ffa00b48b004a2aa1d",
"main.dart.js": "d544724ab3b0d8abc92ec700fe4aa907",
"manifest.json": "7e2f275f500dd3e518a5a33d6e61c769",
"version.json": "2028f6bb509c3cf1367ae94a7c6f5341"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
