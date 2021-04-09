import { React, useEffect, useState } from 'react'
// import './auth.css'


// const isNumberRegx = /\d/;
// const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const Login = (props) => {
    const [passwordFocused, setPasswordFocused] = useState(false);
    // const [passwordValidity,setpasswordValidity] = useState({
    //     minCharacter: null,
    //     number  : null,
    //     specialChar : null,
  
    // });

    // const onChangePassword = () => {
    //     setPassword(password);
    //     setpasswordValidity({
    //         minCharacter: password.length>= 8 ? true : false,
    //         number : isNumberRegx.test(password) ? true :false ,
    //         specialChar : specialCharacterRegx.test(password) ? true :false
    //     })
    // }
    useEffect(() => {
        document.title = "Login"
    }, [])
    const {
        email
        , password
        , setEmail
        , setPassword
        , handleLogin
        , handleSignup
        , handleReset
        , hasAccount
        , setHasAccount
        , emailError
        , passwordError
    } = props;

    return (
        <section className="login">
            <div className="loginConatainer">

                <input placeholder="Name" type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errmsg">{emailError}</p>

                <input placeholder="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

                <p className="errmsg">{passwordError}</p>
                <div>
                    {hasAccount ? (
                        <>
                            <button className="sign-in-submit" onClick={handleLogin}>
                                Sign In
            </button><button className="resetSubmit" onClick={handleReset}>
                                Reset
            </button>





                            <p>Don't have an account ? <span className="submit" onClick={() => setHasAccount(!hasAccount)}>
                                Sign up
            </span>
                            </p>

                        </>
                    ) : (
                            <>

                                <button className="submit" onClick={handleSignup}>
                                    Sign Up
            </button>
                                <p>
                                    Have an account? ? <span className="submit" onClick={() => setHasAccount(!hasAccount)}>
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