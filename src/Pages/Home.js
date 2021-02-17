import Navbar from './Navbar'
import React, { useEffect, useRef } from 'react'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';  

const Home = ({loading, data}) =>{
//  const RefValue = useRef();

//  useRef= ()=>{

//  }
  const text = <h1>Home Page</h1>
  useEffect(() => {
    document.title = "Home"
  }, [])
  console.log("it is loading",loading,data);
  return(
    <div>
   
    
 {/* <select defaultValue={this.state.selectValue} 
 onChange={this.handleChange} 
 ></select>
 <h4>You selected </h4> */}
     <p>{text}</p>
     <InputLabel id="label">Subject</InputLabel>
<Select labelId="label" id="select" value="SE">
  <MenuItem value="CS">CS</MenuItem>
  <MenuItem value="IT">IT</MenuItem>
  <MenuItem value="SE">SE</MenuItem>
</Select>

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

   