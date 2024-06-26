/**
 *              -----------------------------------------------
 *                  INITIAL SETUP (initial firebase installaion)
 *             ------------------------------------------------
 * 1. visit: console.firebase.googel.com
 * 2. create project (skip google analystics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file
 * 6. DANGER: do not publish ro made firebase config to public by pushing to github
 * 
 *                        ----------------- 
 *                            INTREGRATION
 *                         ---------------
 * 7. Go to Docs > Build > Authentication > Web > Get Started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from frebase/auth
 * 10. create const auth = getAuth(app)
 * 
 * 
 *                     ----------------------
 *                          PROVIDER SETUP
 *                     ---------------------
 * 11. import GoogleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sign-in method (google, facebook, github, etc.)
 * 
 * --------------------
 * More Auth Provider
 * --------------------
 * 1. activate the auth provider (create app, provide redirect url, client id, client secret)
 * 
 */