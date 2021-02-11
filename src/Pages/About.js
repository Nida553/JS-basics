import React, { useState, useEffect } from 'react';

//functional component
const About = (props) =>{
  const text = <h1>About Us</h1>
  useEffect(() => {
    document.title = "About"
  }, [])
  return(
    <div className = "About">
      <p>{text}</p>
    </div>
  )
}
//class component
// class About extends React.Component {

 
//   componentDidMount() {
//     document.title = 'about     ';
//   }
//     render() {
      
//       return <h1>About us</h1>;
//     }
//   }

  export default About 