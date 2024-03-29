# simple firebase

**installation of firebase** 

1. **visit:** [ console.firebase.googlelcom](https://console.firebase.google.com/u/0/)
2. create project ( skip googel analystics)
3. Register app ( create config file)
4. inatall firebase: `npm inatall firebase `
5. [add config file to your project](https://github.com/mozzammelrobi/simple-firebase/blob/main/src/firebase/firebase.init.js)
6. **Note:** Do not publish your firebase config in github
7. Go to Docs > Build > Authentication > Web > Get Started 
8. export app from [firebase.config.js](https://github.com/mozzammelrobi/simple-firebase/blob/main/src/firebase/firebase.init.js) file: export default app

9. [Login.jsx: import getAuth from firebase/auth](https://github.com/mozzammelrobi/simple-firebase/blob/main/src/components/Login/Login.jsx) 
10. create const auth = getAuth(app) 
11. import GoogleAuthProvider and create a new provider 
12. use singInWithPopUp and pass auth and provider
13. [activate sing-in method (googel, facebook, github, etc.)](https://console.firebase.google.com/u/0/project/fir-project-fe8a8/authentication/providers)



- **config.js**  firebase file
```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs5n6MPm13QVS90sYPyEfKkxi4uAK4CYQ",
  authDomain: "simple-firebase-bfa8f.firebaseapp.com",
  projectId: "simple-firebase-bfa8f",
  storageBucket: "simple-firebase-bfa8f.appspot.com",
  messagingSenderId: "89096847211",
  appId: "1:89096847211:web:7674835345e8310108162e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 
```


```
import { useState } from "react";
import app from "../../firebase/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logingUser = result.user
                console.log(logingUser?.photoURL)
                setUser(logingUser)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
            setUser(loggedUser)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>
            {user ?
                <button onClick={handleSignOut}>Log Out</button>:
                <div>
                    <button onClick={handleGoogleSignIn}>Google Login</button> 
                    <button onClick={handleGithubSignIn}>Github login</button>
                </div>
            }
            {user && <div>
                <h3>user: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="user img not fund" />
            </div>}
        </div>
    );
};

export default Login;
```