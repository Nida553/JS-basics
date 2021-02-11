import {React,useEffect} from "react"

//functional component
const Portfolio = () =>  {
  useEffect(() => {
    document.title = "Portfolio"
  }, [])
const text = <h1>Portfolio</h1>
return (
  
  <div>
    {text}
  </div>
)

}

export default Portfolio



//class component
// class Portfolio extends React.Component {
//   componentDidMount() {
//     document.title = 'Portfolio';
//   }
  
//     render() {
//       return <h1>Portfolio</h1>;
//     }
//   }

//   export default Portfolio 