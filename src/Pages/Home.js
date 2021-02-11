import Navbar from './Navbar'
import React, { useEffect } from 'react'

const Home = () =>{
  const text = <h1>Home Page</h1>
  useEffect(() => {
    document.title = "Home"
  }, [])
  return(
    <div>
     <p>{text}</p>
    </div>
  )
}

export default Home
//class component
// export default class Home extends React.Component {
//   componentDidMount() {
//     document.title = 'Contact us';
//   }
  
//     render() {
//       return <div >
//       <h1>Home page</h1>
//       </div>
      
     
//     }
//   }

   