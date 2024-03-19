self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('your-cache-name').then((cache) => {
        return cache.addAll([
          '/',
          '/About Us.html',
          '/Car Details Screen.html',
          '/Car Search Screen.html',
          '/Contact Us.html',
          '/Home Screen.html',
          '/Home.html',
          '/Location Based Screen.html',
          '/Price Lookup Screen.html',
          '/Book Test Drive.html',
          '/CarsShowcase.html',
          '/loginpage.html',
          '/signuppage.html',
          '/css/style.css',
          '/js/script.js',
          '/Images/CarChoicePro.png'  
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  