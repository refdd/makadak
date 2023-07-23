import { useEffect } from "react";
import { getMessagingToken } from "@/firebase/messaging-get-token";

import "firebase/messaging";
import { getMessaging, onMessage } from "firebase/messaging";
import { firebaseApp } from "@/firebase/firebase.conf";
import CustomSnackbar from "@/components/CustomSnackbar/CustomSnackbar";
import { useState } from "react";
import { usePostDeviceNotificationMutation } from "@/redux/apis/notificationApi";

const NotificationProvider = ({ user, children }) => {
    const [fcmToken, setFcmToken] = useState(null);
    const [pushNotificationOpen, setPushNotificationOpen] = useState(false);
    const [notficationTitle, setNotificationTitle] = useState('');
    const [postDeviceQ, ress] = usePostDeviceNotificationMutation();

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/firebase-messaging-sw.js')
                .then((registration) => console.log('scope is: ', registration.scope));
        }
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.addEventListener("message", (event) => {
                console.log("event for the service worker", event);
            });
        }
        setToken();

        async function setToken() {
            try {
                const token = await getMessagingToken();
                if (token) {
                    setFcmToken(token)
                    getMessage();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

    useEffect(() => {
        if (fcmToken) {
            console.log('###FCM', fcmToken);
            postDeviceQ({
                "fcmToken": fcmToken,
                "userId": user?.id,
                "appId": "com.mazadak.web",
                "appVersion": "1.0",
                "platform": "web",
                "environment": "production",
                "enabled": false,
            }).unwrap()
                .then(res => {
                    console.log('DEV#', res);
                }).catch(e => {
                    console.log('DEV#', e);

                })
        }
    }, [])

    function getMessage() {
        const messaging = getMessaging(firebaseApp);
        onMessage(messaging, (message) => {
            setNotificationTitle(message?.notification?.title)
            setPushNotificationOpen(true);
        });
    }
    return (
        <>
            <CustomSnackbar
                title={notficationTitle}
                open={pushNotificationOpen}
                setOpen={(tf) => setPushNotificationOpen(tf)}
                notification={true}
            />
            {children}
        </>
    )
}

export default NotificationProvider;