import {React,useEffect} from 'react'
import './auth.css'
 const  Login = (props)  =>{

    useEffect(() => {
        document.title = "Login"
      }, [])
     const {email
        ,password
        ,setEmail
        ,setPassword
        ,handleLogin
        ,handleSignup
        ,hasAccount
        ,setHasAccount
         ,emailError
        ,passwordError } = props;
        
    return (
       <section className = "login">
<div className = "loginConatainer">
    <label>User Name</label>
    <input type = "text" autoFocus required value ={email} onChange = {e=>setEmail(e.target.value)} />
    <p className= "errmsg">{emailError}</p>
    <label>Password    </label>
    <input type = "password" required value = {password} onChange = {e => setPassword(e.target.value)} />
    <div>
    <div>Contains more than 8 character</div>
    <div>Contains Number</div>
    <div>Contains UpperCase</div>
    <div>Contains Sybmols</div>

    </div>
   
    <p className= "errmsg">{passwordError}</p>
    <div  className = "btnContainer">
        {hasAccount  ? (
            <>
            <button className="submit" disabled = {true} onClick = {handleLogin}>
Sign In
            </button>
            <p>Don't have an account ? <span className="submit" onClick = {() => setHasAccount(!hasAccount)}>
                Sign up
            </span>
                </p>
            </>
        ):( 
            <>
            <button className="submit" disabled = {true} onClick = {handleSignup}>
Sign Up
            </button>
            <p>
                Have an account? ? <span className="submit" onClick = {() => setHasAccount(!hasAccount)}>
                    Sign In
                </span>
                </p>
            </>
        )

        }
    </div>
    
</div>

       </section>
    )
}
export default Login; 