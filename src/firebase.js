import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

//firebaseの初期化
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD44GibZfHAbhPYXiP0PqSDvPPCMeBxaLA",
  authDomain: "line-clone-36354.firebaseapp.com",
  projectId: "line-clone-36354",
  storageBucket: "line-clone-36354.appspot.com",
  messagingSenderId: "904526526367",
  appId: "1:904526526367:web:7934966f0190de31d5afaa",
});

//firebase内のデータベースを変数に入れている
const db = firebaseApp.firestore();

//認証情報を変数に入れる
const auth = firebase.auth();

const storage = firebase.storage();

export { db, auth, storage };

/*
firebase.initialiseAppの中身にはfirebaseの<>ウェブボタンをクリックして起こる設定時に出るobjectの中身を
そのまま入れる。それを変数に格納する。const db = firebaseApp.firestore();
firebaseではAuthenticationの設定を行う。Googleが有効になっていればOK。
認証ができているかの確認はuseAuthStateを用いる。App.js参照。三項演算子を用いて
表示するコンポーネントを切り替える。サインアウトはauth.signOut()で可能。
firebase storeの設定はlocationはasia-noutheastにする。

 */
