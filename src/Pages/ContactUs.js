import React, { useState, useEffect,useMemo } from 'react';
import Home from './Home';
import MOCK_DATA from './MOCK_DATA.json';
//functional component
const Contact = (props) =>{
  const text = <h1>About Us</h1>
  useEffect(() => {
    document.title = "contact"
  }, [])

  function myFunction() {
    var str = "Killua Zoldyck is the best friend of Gon Freecss";
    var output = document.getElementById("excerpt_area");
    if (str.length > 10) {
        str = str.substring(0,10) + "...";
    }
    output.innerHTML = str;
}
  return(
    <div className = "contact">
      <Home loading = "hii" data = { 'nida' } />
      <h1 onClick= {(myFunction)} >hello</h1>
      <p>{text}</p>
    </div>
  )
}




//class component
// class ContactUs extends React.Component {
//   componentDidMount() {
//     document.title = 'Contact us';
//   }
//     render() {
//       return <h1>Contact Us</h1>;
//     }
//   }

   export default Contact;