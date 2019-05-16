import * as firebase from 'firebase';


  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default }
    // const database = firebase.database()
    // database.ref('expenses').on('child_changed', (snapshot) => {
    //     console.log(snapshot.key,snapshot.val())
    // })
    // database.ref('expenses').once('value').then((snapshot) => {
    //     const expenses = [];
    //     snapshot.forEach((childSnapshot) =>{
    //         expenses.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         });
    //     });
    //     console.log(expenses)
    // });
    // database.ref('expenses').on('value', (snapshot) => {
    //     const expenses = [];
    //     snapshot.forEach((childSnapshot)=> {
    //         expenses.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         });
    //     })
    //     console.log(expenses)        
    // })
    // database.ref('expenses').push({
    //     description:'cocnut drink',
    //     note:'La Brisa',
    //     createdAt:12,
    //     ammount: 196
    // })

    // firebase.database().ref().set({
    //     name: 'Andrew Mead',
    //     age: 23,
    //     stressLevel: 6,
    //     job: {
    //         title: 'Software developer',
    //         company: 'Google'
    //     },
    //     location: {
    //         country: 'USA',
    //         city: 'Philly'
    //     }
    // }).then(() =>{
    //     console.log('Data is saved successfully')
    // }).catch((e) => {
    //     console.log('error:',e)
    // })
    // firebase.database().ref().on('value', (snapshot) => {
    //     console.log(snapshot.val())
    // })
    //  setTimeout(()=> {
    //     database.ref('expenses').push({
    //         description:'breakfast',
    //         note:'Funky Pancakes',
    //         createdAt:11,
    //         ammount: 500
    //     })
    //  },3500)
    // firebase.database().ref().
    // setTimeout(()=> {

    //     firebase.database().ref().update({
    //         'job/company': 'Amazon',
    //         // 'location/city': 'Boston',
    //         'job/title': 'Manager',
    //         name: 'Daniel Mage'
    //     }).then(() => {
    //         console.log('database updated')
    //     }).catch((e) => {
    //         console.log('error:',e)
    //     });
    // },3500)
    //  firebase.database().ref('attributes').set({
    //     height: '5-10',
    //     weight: 180
    // }).then(() =>{
    //     console.log('Data is saved successfully')
    // }).catch((e) => {
    //     console.log('error:',e)
    // })
// firebase.database().ref('age').remove().then(() =>{
//     console.log('data has been removed')
// }).catch((e) => {
//     console.log('error:',e)
// })