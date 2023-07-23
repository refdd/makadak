import { getMessaging, getToken } from "firebase/messaging";
import { firebaseApp } from "./firebase.conf";


export const getMessagingToken = async () => {

    const messaging = getMessaging(firebaseApp);
    const currentTokent = await getToken(messaging, { vapidKey: 'BOyTBw5GqNMUJ2OAqXt2Jnr-BZKHGnVkgkdbT1RSFEcMx9mzzrLMtA5XvkPlPJFYXhMFAZbm_L03ImJQinswkoI' })
    return currentTokent
}