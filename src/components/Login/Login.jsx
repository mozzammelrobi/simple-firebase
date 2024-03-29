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