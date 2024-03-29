import { useState } from "react";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const logingUser = result.user
                console.log(logingUser?.photoURL)
                setUser(logingUser)
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

    console.log(user?.photoURL)
    return (
        <div>
            {user ?
                <button onClick={handleSignOut}>sign OUt</button>:
                <button onClick={handleGoogleSignIn}>Google Login</button> 
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