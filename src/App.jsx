import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from './firebase/firebase.config';


const auth = getAuth(app);
const googleProibadar = new GoogleAuthProvider()

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

  return (
    <div className="App">
      <div>
        
      </div>
      <h1>Vite + React</h1>
      <button onClick={hendalGoogleSineing}>google sing ing</button>
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
