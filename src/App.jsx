import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, GithubAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import './App.css'
import app from './firebase/firebase.config';


const auth = getAuth(app);
const googleProibadar = new GoogleAuthProvider()
const githabProvider = new GithubAuthProvider();

function App() {
  const [usar, setUsar] = useState(null)
  const hendalGoogleSineing = () => {
    signInWithPopup(auth, googleProibadar)
      .then(result => {
        const logeuser = result.user;
        console.log(logeuser)
        setUsar(logeuser)

      })
      .catch(error => {
        console.log(error)
      })
  }
  const hendalgithabSineing = () => {
    signInWithPopup(auth, githabProvider)
      .then(result => {
        const logeuser = result.user;
        console.log(logeuser)
        setUsar(logeuser)

      })
      .catch(error => {
        console.log(error)
      })
  }
  const hendalSingOut = () => {
    signOut(auth)
      .then(() => {
        setUsar(null)
        console.log('logout')
      })
      .catch((error) => {
        console.error(error);
      })

  }

  const hendalSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(email, password, name)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        setUsar(user)
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        console.log('errorMessage')

      });
  }
  return (
    <div className="App">
      <div>
        <form onSubmit={hendalSubmit}>
          <div className="container">
            <label ><b>Name</b></label>
            <input type="text" placeholder="Enter name" name="name" required />
            <label ><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required />

            <label ><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />

            <button className='submitbtn' type="submit">Login</button>

          </div>
        </form>
      </div>
      <h1>Vite + React</h1>
      <button onClick={hendalGoogleSineing}>google sing ing</button>
      <button onClick={hendalgithabSineing}>githab sing ing</button>
      <button onClick={hendalSingOut}>SingOut</button>
      {
        usar &&
        <div className="">
          <h1>{usar.displayName}</h1>
          <h3>{usar.email}</h3>
          <img src={usar.photoURL} alt="" />
        </div>

      }

    </div>
  )
}

export default App
