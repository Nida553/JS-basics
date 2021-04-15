import { React } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css';
import { connect } from 'react-redux';
import './styles/tailwind.css';
import Runcit from './runcitLogo.png'
import Anakeed from './anakeed.png';

import firebase from 'firebase'
import AddProject from './AddProject'
import Button from './UI/Buttons'
import Case from './UI/CaseStudy'
import SpoonLogo from './logo.png';
import Title from './UI/Title'




const TailwindList = () => {

  return (

    <div className="flex-col">
     
      <div className="flex md:flex-row m-2 justify-evenly">
        <div className="w-96 h-auto  bg-blue-100"><p class="mb-12 m-4">
          <b>Nida Maqsood</b> is a Software Engineer with laravel background.
               Currently working on JS stack to enhance skill set.InvoZone is a great place to enhacne your tech skills.
               Thanks InvoZone!!
              </p>
          <span className="rounded-full hover:from-blue-500 hover:to-purple-500
       bg-blue-300 items-start py-2 px-6 border-black-500 ml-4 my-8    w-24 border-2">
            About 
               
                 
               </span>
               
        </div>

        <div className="w-96 flex ml-1.5  h-24 bg-blue-100">

          <span className="rounded-full h-8 w-auto py-1 px-6  bg-blue-300  m-12 mt-8  border-2">
            Say Hello
               </span>
               {/* <Button name="Add Project" /> */}
        </div>
      </div>
      <div className="flex    justify-evenly">
        <div className="w-96 mt-2.5  h-auto   bg-blue-100">
          <Title title="Spoon" date="25-april-2021" tech="Backend" stack="Software"
            description="A food ordering App based in Saudi Arabia. It allows to order food sitting  at home and get the material at doorstep.
        A software developed by InvoZone. I have worked as a backend/laravel developer in this project." organization="InvoZone" role="Backend Developer" image={SpoonLogo}
          />

          <Case />


        </div>
        <div className="w-96 -mt-28 mt-2.5 ml-1.5 h-4/6   bg-blue-100">

          <Title title="Runcit" date="April 9 2021" tech="Codeigniter" stack="Web App"
            description="A food ordering App based in Saudi Arabia. It allows to order food sitting  at home and get the material at doorstep.
        A software developed by InvoZone. I have worked as a backend/laravel developer in this project." organization="InvoZone" role="Backend Developer" image={Runcit}
          />

          <Case />

        </div>

      </div>
      <div className="flex m-2  justify-evenly">
        <div className="w-96 mt-2.5   h-4/6  h-auto   bg-blue-100">
          <Title title="Anakeed" date="April 9 2021" tech="Laravel" stack="Web App"
            description="A food ordering App based in Saudi Arabia. It allows to order food sitting  at home and get the material at doorstep.
        A software developed by InvoZone. I have worked as a backend/laravel developer in this project." organization="InvoZone" role="Backend Developer"
            image={Anakeed}
          />

          <Case />


        </div>

        <div class="w-96 ml-1.5  h-4/6 mt-2.5 -mt-28  bg-blue-100">
          <Title title="PortFolio" date="April 09 2021" tech="UI/UX" stack="React & Redux"
            description="A food ordering App based in Saudi Arabia. It allows to order food sitting  at home and get the material at doorstep.
        A software developed by InvoZone. I have worked as a backend/laravel developer in this project." organization="InvoZone" role="Backend Developer" image={Anakeed}
          />
          <Case />


        </div>

      </div>
      <div className="flex m-2  justify-evenly">
        <div className="w-96 mt-2.5 h-4/6  h-auto   bg-blue-100">
          <Title title="Random" date="April 9 2021" tech="Laravel" stack="Web App"
            description="A food ordering App based in Saudi Arabia. It allows to order food sitting  at home and get the material at doorstep.
        A software developed by InvoZone. I have worked as a backend/laravel developer in this project." organization="InvoZone" role="Backend Developer"
            image={Anakeed}
          />

          <Case />


        </div>

        <div class="w-96 ml-1.5   h-4/6 -mt-28 mt-2.5 bg-blue-100">
          <Title title="Random 2" date="April 09 2021" tech="UI/UX" stack="React & Redux"
            description="A food ordering App based in Saudi Arabia. It allows to order food sitting  at home and get the material at doorstep.
        A software developed by InvoZone. I have worked as a backend/laravel developer in this project." organization="InvoZone" role="Backend Developer" image={Anakeed}
          />
          <Case />


        </div>

      </div>
      <div className="flex   justify-evenly">
      <div class="w-96 mt-2.5 -mr-96 ml-2.5 -mt-28 mr-0 h-24 bg-blue-100">

        <span class=" py-1 px-6 flex content-between  border-black-500   m-4  ">
          Portfolio made with   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="auto" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>  @ InvoZone
               </span>
        <span class="m-4 mt-4">
          Copyright <b>Nida Maqsood</b> All rights reserved!
           </span>

      </div>
      
        


</div>


</div>

  )
}
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}
export default connect(mapStateToProps)(TailwindList)