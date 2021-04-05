import React from 'react'
import './style.css'
import { connect } from 'react-redux'

const tailwindList = (props) => {
    return (
        <div class="min-h-screen flex items-center bg-purple-500">
        <div class="flex-1 max-w-4xl mx-auto p-10">
          <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
            <li class="bg-white  shadow-xl"><div class="h-24">2</div></li>
          </ul>
        </div>
        <div class="grid grid-cols-3 gap-4">
  <div class="...">1</div>
  <div class="...">2</div>
  <div class="...">3</div>
  <div class="col-span-2 ...">4</div>
  <div class="...">5</div>
  <div class="...">6</div>
  <div class="col-span-2 ...">7</div>
</div>
      </div>      
      


//         <div id="masonry">
// <div id = "intro">
    
// </div>

//     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/1.jpg" />
//     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/2.jpg" />
//     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/3.jpg" />
//     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/4.jpg" />
//     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/6.jpg" />
//     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/8.jpg" />
//     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/9.jpg" />
//     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/7.jpg" /> </div>



    )
}
const mapStateToProps = (state) => {
  return {
    projects : state.project.projects
  }
}
export default  connect(mapStateToProps)(tailwindList)