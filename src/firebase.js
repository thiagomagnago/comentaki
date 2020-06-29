import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCriXNVSvSADYvcZhFrjCa5KRpNaBel8kI",
    authDomain: "comentaki-tms.firebaseapp.com",
    databaseURL: "https://comentaki-tms.firebaseio.com",
    projectId: "comentaki-tms",
    storageBucket: "comentaki-tms.appspot.com",
    messagingSenderId: "752736619990",
    appId: "1:752736619990:web:fc4f4072ccc8bb0dfd2877"
};

firebase.initializeApp(firebaseConfig)

export default firebase