


import { getAuth , signInWithPopup,GoogleAuthProvider } from "firebase/auth";

import './button.css';
import firebaseApp from './firebaseConfig';
import {useState} from "react";
import { signOut } from "firebase/auth";

const auth = getAuth(firebaseApp)

function App(){  
 
const provider = new GoogleAuthProvider();
 const [user , setUser] = useState({


   isSignedIn: false,
   name:'',
   email:'',
   photo:''

 });


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
 
  const handleSignOut =()=>{

    console.log('Signed Out Click ')

    const auth = getAuth();
    signOut(auth).then(res => {
      const SignedOutuser = {

        name : '',
        email:'',
        photo:''
      }
      setUser(SignedOutuser)
    }).catch((error) => {
      // An error happened.
    });

  }
  
  
  return (  
    <div className ="btn">
      { 
      user.isSignedIn ? <button  onClick={handleSignOut}>Sign-out</button>:
     <button  onClick={handleclick}>Sign-Up</button>

    }
     {
       
       user.isSignedIn && <div> <p>  Welcome , {user.name}</p>
       <p>  Email,{user.email}</p>
       <img src={user.Photo} alt=""></img>
       
        </div>
       
     }
    
     </div>




);

}

export default App;
