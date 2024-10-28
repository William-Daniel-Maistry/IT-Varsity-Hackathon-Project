// src/serviceWorkerRegistration.js

export function register(config) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        navigator.serviceWorker
          .register(swUrl)
          .then((registration) => {
            console.log('Service Worker registered: ', registration);
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          })
          .catch((error) => {
            console.error('Service Worker registration failed: ', error);
            if (config && config.onError) {
              config.onError(error);
            }
          });
      });
    }
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }
  }
  