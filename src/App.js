import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {React, useEffect,useState} from "react";
import Routes from './Routes';
import fire from './Pages/Firebase'
import Welcome from './Pages/Welcome'
import Login from './Pages/Login';
import "tailwindcss/tailwind.css";
import '../src/'





const App = () => {
   const [user,setUser]= useState('');
   const [email,setEmail] = useState('');
   const [password, setPassword]  = useState('');
   const [emailError, setEmailError] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [hasAccount, setHasAccount] = useState(false);
   
   

   const clearInputs = () => {
     setEmail('');
     setPassword('');
   }
   const clearErrors = () =>{
     setEmailError('');
     setPasswordError('');
   }
   const handleLogin = (e) =>{
      
     clearErrors();
     fire
     .auth()
     .signInWithEmailAndPassword(email,password)
     .catch(err  =>{
       switch(err.code){
         case "auth/invalid-email":
         case  "auth/user-disabled":
        case  "auth/user-not-found":
          setEmailError(err.message);
          break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
       }
     });
   }

   
   const handleSignup = () =>{
     clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err  =>{
      switch(err.code){
        case "auth/email-already-in-use":
        case  "auth/invalid-email":
       
         setEmailError(err.message);
         break;
         case "auth/weak-password":
           setPasswordError(err.message);
           break;
      }
    });
   };
   const handleLogOut = () =>{
     fire.auth().signOut();
   };
   const authListener = () =>{
     fire.auth().onAuthStateChanged((user) =>{
       if(user){
         clearInputs();
         setUser(user);
       }
       else {
         setUser("");
       }
     });
   };

   const handleAddProject = () => {
     //do something
   }


   useEffect(()=>{
    authListener();
   },[]);
const handleReset = (email) => {
  
  fire.auth().sendPasswordResetEmail(email)
  .then(function (email) {
    alert('Please check your email...')
  }).catch(function (e) {
    console.log(e)
  })
}

  return (
  <div className = "App">
    
    {/* {user ? ( <Welcome handleLogOut = {handleLogOut} />) :
    (
      <Login 
email = {email} 
setEmail = {setEmail} 
password = {password}
 setPassword = {setPassword} 
 handleLogin = {handleLogin}
 handleSignup = {handleSignup}
 hasAccount = {hasAccount}
 setHasAccount = {setHasAccount}
 emailError = {emailError}
 passwordError = {passwordError}
 handleReset = {handleReset}
 />
    )
 
  } */}

 <Router>
   <Routes/>
 </Router>
  </div>
  
   
  );
}

export default App;
