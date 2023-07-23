// It's a static script file, so it won't be covered by a module bundling system
// hence, it uses "importScripts" function to load the other libs
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Replace the values with yours
const firebaseConfig = {
    apiKey: "AIzaSyDsivST0tVQe5Ervx4aQhlgg1zM1V0wf1A",
    authDomain: "examble-c123d.firebaseapp.com",
    projectId: "examble-c123d",
    storageBucket: "examble-c123d.appspot.com",
    messagingSenderId: "744836102630",
    appId: "1:744836102630:web:d157365ec6eddaa97abe27",
    measurementId: "G-YR6XJFMPPJ"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Not necessary, but if you want to handle clicks on notifications
self.addEventListener('notificationclick', (event) => {
    event.notification.close()

    const pathname = event.notification?.data?.FCM_MSG?.notification?.data?.link
    if (!pathname) return
    const url = new URL(pathname, self.location.origin).href

    event.waitUntil(
        self.clients
            .matchAll({ type: 'window', includeUncontrolled: true })
            .then((clientsArr) => {
                const hadWindowToFocus = clientsArr.some((windowClient) =>
                    windowClient.url === url ? (windowClient.focus(), true) : false
                )

                if (!hadWindowToFocus)
                    self.clients
                        .openWindow(url)
                        .then((windowClient) =>
                            windowClient ? windowClient.focus() : null
                        )
            })
    )
})