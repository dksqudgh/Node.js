import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
        const firebaseConfig = {
          apiKey: "AIzaSyBnbbKq3Sutrv-wp8yc46D9KSKHtB6KQ9s",
          authDomain: "bookapp7213.firebaseapp.com",
          databaseURL: "https://bookapp7213-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "bookapp7213",
          storageBucket: "bookapp7213.firebasestorage.app",
          messagingSenderId: "453880308052",
          appId: "1:453880308052:web:501407a90fa77135ede8c1"
  };

  //module방식을 적용하고 있어서 import 로컬 파일 참조가 안됨.
  //모듈방식에서 기본 내보내기 -default사용 가능함. 한번만 사용이 가능함
  export const app = initializeApp(firebaseConfig);
