import React from   'react'
import './auth.css'

 const Welcome =({handleLogOut})  =>{
    return (
        <div className = "welcome">
            <nav>
            
            
            <button  className="submit" onClick ={handleLogOut}>Logout</button>
           
            <button  className="submit" onClick ={handleLogOut}>List of projects</button>
            <button  className="submit" onClick ={handleLogOut}>Logout</button>

            </nav>
            
        </div>
    )
}
export default Welcome