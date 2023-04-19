import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import './App.css'
import app from './firebase/firebase.config';


const auth = getAuth(app);
const googleProibadar = new GoogleAuthProvider()
const githabProvider = new GithubAuthProvider();

function App() {
  const [usar, setUsar]= useState(null)
  const hendalGoogleSineing= ()=>{
    signInWithPopup(auth, googleProibadar)
    .then(result =>{
      const logeuser =result.user ;
      console.log(logeuser)
      setUsar(logeuser)

    })
    .catch(error=>{
      console.log(error)
    })
  }
  const hendalgithabSineing= ()=>{
    signInWithPopup(auth, githabProvider)
    .then(result =>{
      const logeuser =result.user ;
      console.log(logeuser)
      setUsar(logeuser)

    })
    .catch(error=>{
      console.log(error)
    })
  }
  const hendalSingOut= ()=>{
    signOut(auth)
    .then(()=>{
      setUsar(null)
      console.log('logout')
    })
    .catch((error)=>{
      console.error(error);
    })
    
  }
  return (
    <div className="App">
      <div>
        
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
