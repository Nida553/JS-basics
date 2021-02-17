import React from   'react'
import './auth.css'

 const Welcome =({handleLogOut})  =>{
    return (
        <div className = "App">
            <nav>
            <h2>Welcome</h2>
            <button  className="submit" onClick ={handleLogOut}>Logout</button>
            </nav>
            
        </div>
    )
}
export default Welcome