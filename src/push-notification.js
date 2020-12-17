import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '658739053955' // troque pelo seu sender id 
  });
}

// const sendNotificationButton = () => {
//   const data = {
//      "notification": {
//         "title": "Awadhesh",
//         "body": "write some description",
//         "click_action": "http://localhost:3000/",
//         "icon": "http://url-to-an-icon/icon.png"
//     },
//     "to": "czVYDPBwgQ8:APA91bEA3Ssz73uiqnhqb24Yzl5-Mlvc_I9s_Vt00aB7k1OleRKtHtQpg6py-2mtOSADHEuM7m_lP9ldPRbnoj-0m49baH2lPJ5ajTKqwBrl38n5QKIIxOUaOVne3kArlMqmY5ZuuKhX"
//   }

//   fetch('https://fcm.googleapis.com/fcm/send', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
// 'Authorization': 'key=AAAAmV_oRYM:APA91bGg6oUDfWwpnPsp2uD5Fm3mUDIW0kVnZzqZZfpRe1B51yc5ZPieCkYGnuv8RllorXNVXps83-_BdZ8ksDCSkKCfhUhskU4yV3YrJi8iMA_6lQKwJ21XecxAkz7PF_VW0XmCtbl-'
//   },
//   body: JSON.stringify(data),
// })
// .then(res => {
//   console.log('res', res);
// })
// .catch(err=> console.log(err))
// }

export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('user token: ', token);
    return token;
  } catch (error) {
    console.error(error);
  }
}
