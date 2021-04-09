import React from 'react'
import './style.css';
import { connect } from 'react-redux';
import './styles/tailwind.css';
import { Row, Col, Card } from 'tailwind-react-ui'
const tailwindList = () => {
  return (
    <div class="flex-col">
      <div class="flex m-2 justify-evenly">
        <div class="w-96 h-56  bg-blue-500"><p class="mb-12">
          <b>Nida Maqsood</b> is a Software Engineer with laravel background.
               Currently working on JS stack to enhance skill set.InvoZone is a great place to enhacne your tech skills.
               Thanks InvoZone!!

              </p>
          <span class="rounded-full ibg-coolGray-500tems-start py-2 px-6 border-black-500 ml-4 my-8    w-24 border-2">
            About
               </span>
        </div>

        <div class="w-96 flex   h-24 bg-blue-500">
          <p></p>
          <span class="rounded-full h-8  py-1 px-6  border-black-500  m-12 mt-8  border-2">
            Say Hello
               </span>
                      </div>
      </div>
      <div class="flex    justify-evenly">
        <div class="w-96  h-96   bg-blue-500">
          <p >
            <h1 class="m-4">
              <b>Spoon</b>
              </h1>
              
              <h2 class="m-4">April 09 2021</h2>
            </p>
            <span class="rounded-full ibg-coolGray-500tems-start py-2 px-6 border-black-500 ml-4 my-8    w-8 border-2">
              Backend
            </span>
            <span class="rounded-full ibg-coolGray-500tems-start py-2 px-6 border-black-500 ml-4 my-8    w-8 border-2">
              Software
            </span>
            <p class="mt-2">A food ordering App based in Saudi Arabia. It allows to order food sitting  at home and get the material at doorstep.
            A software developed by InvoZone. I have worked as a backend/laravel developer in this project. 
            </p>
            <b class="m-2">Organization</b> 
            <span>InvoZone</span><br></br>
            <b class="m-2">Role</b> 
            <span>Backend Developer</span>
        </div>
        <div class="w-96 h-96   bg-blue-500"></div>

      </div>
      <div class="flex m-2   justify-evenly">
        <div class="w-96  h-80   bg-blue-500"></div>
        <div class="w-96 h-80   bg-blue-500"></div>

      </div>
      <div class="flex m-2   justify-evenly">
        <div class="w-96  h-80   bg-blue-500"></div>
        <div class="w-96 h-80   bg-blue-500"></div>

      </div>





      {/* <Row nowrap>
  <Col>
    <Card backgroundColor="cyan" borderRadius = "2px"  h={56} w="60" />
    
      </Col>
      <Col>
    <Card backgroundColor="grey" borderRadius = "2px"  h={24} w="65" />
      </Col>
      <Card backgroundColor="grey" borderRadius = "2px"  h={24} w="65" />
</Row>
<Row nowrap>
  <Col>
    <Card backgroundColor="blue" borderRadius = "2px"  h={56} w="60" />
      </Col>
      <Col>
    <Card backgroundColor="grey" borderRadius = "2px"  h={24} w="65" />
      </Col>
    
</Row>

<div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
  <div>1</div>
    <div>9</div>
</div> */}


    </div>







  )
}
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}
export default connect(mapStateToProps)(tailwindList)