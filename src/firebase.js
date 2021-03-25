import firebase from 'firebase';

const firebaseConfig = {    
    apiKey: "AIzaSyAEpLXP5JQ9fX9y_Ikt1Mi7cK194bfq8Ko",    
    authDomain: "illiapp.firebaseapp.com",    
    projectId: "illiapp",    
    storageBucket: "illiapp.appspot.com",    
    messagingSenderId: "58716710205",    
    appId: "1:58716710205:web:4d02bb516e4e3f25e55154"
};

firebase.initializeApp(firebaseConfig);

export default firebase;