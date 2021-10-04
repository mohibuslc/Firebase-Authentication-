


import { getAuth , signInWithPopup,GoogleAuthProvider } from "firebase/auth";

import './button.css';
import firebaseApp from './firebaseConfig';


const auth = getAuth(firebaseApp)

function App(){  

 
  const provider = new GoogleAuthProvider();

  const handleclick =()=>{

   
    signInWithPopup(auth, provider)
   .then(res => {
    const {displayName, photoURL,email}=res.user;

    console.log(displayName, photoURL,email)
    
   })
  }
 
  
  return (  
    <div className ="btn">
     <button  onClick={handleclick}>Sign-Up</button>
     </div>
  );

}

export default App;
