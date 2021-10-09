


import { getAuth , signInWithPopup,GoogleAuthProvider } from "firebase/auth";

import './button.css';
import firebaseApp from './firebaseConfig';
import {useState} from "react";


const auth = getAuth(firebaseApp)

function App(){  

 const [user , setUser] = useState({


   isSinedIn: false,
   name:'',
   email:'',
   photo:''

 });
 
  const provider = new GoogleAuthProvider();

  const handleclick =()=>{

   
    signInWithPopup(auth, provider)
   .then(res => {
    const {displayName, photoURL,email}=res.user;
    const signedInUser ={

      isSignedIn: true,
      name : displayName,
      email: email,
      Photo: photoURL
    }

    setUser(signedInUser);

    
    console.log(displayName, photoURL,email)
    
   })
   .catch (err =>{
     console.log(err);
     console.log(err.message);

   })
  }
 
  
  return (  
    <div className ="btn">
     <button  onClick={handleclick}>Sign-Up</button>

     {

       user.isSignedIn && <p>  Welcome , {user.name}</p>

     }
     </div>
  );

}

export default App;
