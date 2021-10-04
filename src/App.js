


import { getAuth , signInWithPopup,GoogleAuthProvider } from "firebase/auth";

import './button.css';
import firebaseApp from './firebaseConfig';


const auth = getAuth(firebaseApp)

function App(){  

 
  const provider = new GoogleAuthProvider();

  const handleclick =()=>{

   
    signInWithPopup(auth, provider)
   .then(res => {

    console.log(res)
    
   })
  }
 
  
  return (  
    <div className ="btn">
     <button  onClick={handleclick}>Sign-Up</button>
     </div>
  );

}

export default App;
