import React from "react"

//functional component

const Contact = () => {
const text = <h1>Contact Us</h1>

return (
  <div>
    {text}
  </div>
);
}

export default Contact


//class component
// class ContactUs extends React.Component {
//   componentDidMount() {
//     document.title = 'Contact us';
//   }
//     render() {
//       return <h1>Contact Us</h1>;
//     }
//   }

//   export default ContactUs 