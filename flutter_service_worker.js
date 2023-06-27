'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bc782111cf79e7f1be2389bfbe5997c7",
"index.html": "c3c57ae72e597f397544c5575d1c6ba3",
"/": "c3c57ae72e597f397544c5575d1c6ba3",
"main.dart.js": "b5629ecda798dd413e07ae065dc7388a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c3808084362508f1e704f1e1813b3fb9",
".git/ORIG_HEAD": "8b826b4ceaa7e6a50aafa39fccbad21c",
".git/config": "44f652837f7a1b0ccb28a8f6c3ba7f7c",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/cc09ddba3f850e8a59b6b6c90f2bcf8cf5eaa7": "84c12afe45fbbccd3d0c51a19dad4343",
".git/objects/6a/00c1a50ce7b482a3ee9f9944a1b75e8b93c73c": "fa7dc968a9fe305665b61a116aaafe8d",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/4ddab0f5e8db22361a61afc6758b03f6e0f75e": "c6ae2198f875bab556823a9108a3ca1a",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/33/d4371ad7cfae33b22c2ecc5d9e15dbb2cc13b5": "a83948659f69e96bfd44257ed9c13dff",
".git/objects/9c/680f69ef09c45cf5dcd573b45a3f23324d0ba8": "d271b67ca908e6f6bfc9f909c8663ab9",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/a2/dc009f691a71b2fb3453f2c31531a1d05e7ad8": "1dc123223af3d97921788efd3d403d46",
".git/objects/a5/2ef3991b285be7312f829d74408983b7aec3d5": "c8545eb9e2ba7ed0d74fe33e5f4b0935",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/16562dd89fe4d97ffffb79826805ced26d35cf": "c49f779d527d58aaef0637b09330f7d0",
".git/objects/e2/c6bdc17246217d178ba65453ad2b21dcc85b9b": "c42e37b53be2cb9049ed2fdc7b6149ef",
".git/objects/f4/d8349703555ba66d04ffb06e5216aafc441f30": "f1916af8854d856d90c7e5d874fa2d3b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fed8e319c9cecccb2870d109c7bb16016b6878": "710810d5be3ad636c95ef269287b1c98",
".git/objects/c9/40185aec4dc758286c5c9285d27776f6ac6092": "70b46f461122d7df873011ba2f9af271",
".git/objects/f2/3ae1127c22b4a3a99d70923deb8aa70cc305ac": "707a074aba5a4d29dc94da0e166ea9ea",
".git/objects/e4/f64e6ab0f52014b4f8627ba210d0ec57c105c2": "c014ee9ab60f4054d808dde30c80cc92",
".git/objects/fe/fa785366515bb20ae0f6dcc12448953fc9b665": "408096d408b7db9ee4461582bc43be35",
".git/objects/pack/pack-726c65913995e791fafb3e907a26e76c25c1e40d.rev": "a2399939961e39cc53c9fd199edc3ebe",
".git/objects/pack/pack-726c65913995e791fafb3e907a26e76c25c1e40d.pack": "80bec96d48de7ec04f533515bd536278",
".git/objects/pack/pack-726c65913995e791fafb3e907a26e76c25c1e40d.idx": "c26e35911f30a70648afdc99d58e439b",
".git/objects/29/ab4f65d7a709f3a1f7633764e29a3317917514": "6b54fbba3b1f2ee1574fa90e71cf986d",
".git/objects/42/6a7aeef1d681ab196289f6f759ee4cb439d283": "a4746c6ed63099f68368f673c944e143",
".git/objects/89/1feb7c2e0ccca10fb620c35a0e9bbc4d9cd783": "2aded808a4b57cd94670824f7754adcd",
".git/objects/89/52156fa755058244ea59a733f13ec5d6e71bb6": "5e8221a6ae931265fa33b7ecff170026",
".git/objects/28/23da6e1342f6a77210998e88024df9d907c3bb": "601e10bd03608635132c88e581818b5e",
".git/objects/17/9c24b04e3e1a4594f13d8633acaf37b667a431": "22dc9dd86127a6ea7f6860e513c4e90d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/938da1c94b9fe94d4cfc03a65fd0e79c44f0f9": "c1f3d08b1cd9ce797b65949b92f62d05",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/54/66ea3a5b27d0f1aadcfc283891d3a932367dbb": "ebe3d793f75be1bd978d7b14c6e196d7",
".git/objects/5e/123d4db113c78ee774b3f0406b0c5b12dc9ef1": "bacfdeb9fdef110b6c655afc2186a096",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/99/1291c95dd0c69a480791ffa383cf1e566f74c0": "bf0e65328b538dc846987ba389fb2634",
".git/objects/55/c274b0da7fcfcf0b1ddaeebb3e0e56988bb6d3": "e6aa4b570e69972cfd635ec80e18cc34",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/680f80bad8d95981837c656fd67b4765ef6594": "da393e1c9adc444041b13d6842f840bc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/c24dd74ee59cd083497fea69ad5190cf7d61e6": "024dd13584ed35898c4f6744489cc8cb",
".git/objects/a6/80f05f3aa1f03dedfbb2a2f78b803f8e14d82a": "1fdd3529153de0c0d54ffd5b1ac8733f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/75b545d3c3b0d7fee843cd2e07ecbbff5bdb9b": "6371fbe91f859af3dd79080a3d3697d0",
".git/objects/c4/db94b9d874ee22d885911dd87a839daacd0afc": "9879e6310a9f2fcf03f4b40b032f634c",
".git/objects/e6/dc09d6e47d07b60a9d2f04b66aa46b5ea65f57": "6d3b172abc6a578f1a5ff3e3bf6d4a4b",
".git/objects/c2/1a567946d8bfa52cfa625bba20b7f8b3b39d13": "0b573a6ac86bdd3e1ce6f57d57bf2156",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/79/a6fdce0b22b0623c9c1c5bb847dc2deeed99b2": "2dda3e971922d9635e333a045e1cd4f2",
".git/objects/2d/ed59ea2ebf3fb57765d9abd5a7a3efeff84d0b": "b0ed08ab551737b917b927c9fa5a948c",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/ba5bad53f9dafbfa30019f8458d1b3b8d94714": "5ceb18caa87aa52b164adf2110cc117c",
".git/objects/8c/ea97e7cc789c79d95432cfbe521661d47dc496": "0738d58e765083831c64cf90838ba933",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2d30cf586f7dc0d01f5657d4bb2c4247",
".git/logs/refs/heads/main": "918efddd0919fa6cf126fbc15f444bee",
".git/logs/refs/remotes/origin/main": "7338ec449c85543e87b3e2bac33b2211",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0c90e996190ad049a0ca3c42d13954b2",
".git/refs/remotes/origin/main": "0c90e996190ad049a0ca3c42d13954b2",
".git/index": "6be86baf07303f3fd65444dfd39deccc",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "82ace4122566517d60f25a58031cdc8e",
".git/FETCH_HEAD": "76125d85b1c0b17b1cc113787005fcf3",
"assets/AssetManifest.json": "da3820c4c6044ed5a2630873afe4429a",
"assets/NOTICES": "dd134c8bda45d97d71293a6d3782b63e",
"assets/FontManifest.json": "7e215f1bd870bae6cbc60797f779708e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "bb5dbfcfaaf51363e3dfaadb1066860d",
"assets/fonts/MaterialIcons-Regular.otf": "7f987df2a2147e0cee5d0b36a097e99a",
"assets/assets/images/project2.jpg": "c53857d893ffee1e218c62976fee3be8",
"assets/assets/images/projectImage2.png": "ad61441f8e4fdf572128641094a5bfe3",
"assets/assets/images/projectImage.png": "cd23df86b85b871b59a272adb853140e",
"assets/assets/images/avatar_5.png": "f56cfb9e13e7f650f81ece368f86da54",
"assets/assets/images/project.jpg": "e823c0bc0d29ed7c491b992b5e0607d2",
"assets/assets/images/coding.jpeg": "750ee9e1b4835505fca171c6bfa90200",
"assets/assets/images/resume.jpeg": "d94b235d6dd11d7e986951654f361d84",
"assets/assets/icons/apple.png": "456e60687462f8188908365335ea3a58",
"assets/assets/icons/favicon.png": "456e60687462f8188908365335ea3a58",
"assets/assets/fonts/Pretendard-Regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/assets/fonts/Pretendard-Black.otf": "6bc3f501ba4e736b706074a29826ec0a",
"assets/assets/fonts/Pretendard-Medium.otf": "9ac30a1a68a5140a58b23aaf8025f1db",
"assets/assets/fonts/Pretendard-Light.otf": "aef3dc5f5592a0a9bfd7e8de7abdc2c5",
"assets/assets/fonts/Pretendard-ExtraBold.otf": "dac19e30ed93b7aed171830c38cda6a2",
"assets/assets/fonts/Pretendard-Bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/assets/fonts/Pretendard-Thin.otf": "0b09a12c024a6380cd40dbfaf2fd79cd",
"assets/assets/fonts/Pretendard-ExtraLight.otf": "23002daa2dee07f8a652bb0ab06af079",
"assets/assets/fonts/Pretendard-SemiBold.otf": "d9d912f2630bae445757f4769271c35c",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
