import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5ODhYg8fEn2dbnJUmQlgCHPAOZiy4Fpo",
    authDomain: "crown-db-t.firebaseapp.com",
    databaseURL: "https://crown-db-t.firebaseio.com",
    projectId: "crown-db-t",
    storageBucket: "",
    messagingSenderId: "921150957510",
    appId: "1:921150957510:web:7a34ccfd6afc646d"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument=async (userAuth, additionalData)=>{
  if(!userAuth)
    return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot=await userRef.get();
  console.log(snapShot);

  if(!snapShot.exists){
    const {displayName, email}=userAuth;
    const createdAt=new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log('error creating user: ', error.message)
    }
  }
  return userRef;
}

export default firebase;
