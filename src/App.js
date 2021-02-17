import logo from './logo.svg';
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import list from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './Pages/Home';
import {React, useEffect,useState} from "react";
import Routes from './Routes';
import Navbar from './Pages/Navbar'
import './Style.css';
import fire from './Firebase'
import Welcome from './Pages/Welcome'
import Logiin from './Pages/Login'
import BasicTable from './Pages/BasicTable';
import EditBlog from './Pages/EditBlog';
import Login from './Pages/Login';
import PwGenerator from './Pages/PwGenerator'



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
   const handleLogin = () =>{
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



   useEffect(()=>{
    authListener();
   },[]);

  return (
  <div className = "App">
    {user ? ( <Welcome handleLogOut = {handleLogOut} />) :
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
 passwordError = {passwordError} />
    )
 
  }

  <PwGenerator />
 <Router>
   <Routes/>
 </Router>

 
  </div>
  
   
  );
}

export default App;
