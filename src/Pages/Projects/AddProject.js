import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import TextArea from 'antd/lib/input/TextArea';
import { Form } from 'reactstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 500,
    padding: '0 30px',
    '& > *': {
      margin: theme.spacing(1),
      justifyContent: 'center',
      borderRadious: 25,
      marginLeft: '24px',
      marginTop: '6px',
      //   width: '25ch',
      '& form': {
        'TextField': {
          borderRadious: 25,
          color: 'blue',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 25,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'blue',
          height: 100,
          padding: '0 30px',
          margin: "10px",
          padding: "10px"
        },

      },

    },

  },
}));

const Textfield = styled(TextField)({
  borderRadius: 25,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
});
const AddProject = () => {

  const [title, setTitle] = useState('');
  const [started, setStarted] = useState('');
  const [total_duration, setTotal_duration] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [organization, setOrganization] =useState('');
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
   alert('You have submitted the form.')

    const projectRef = firebase.database().ref('projects');
    const project = {
      title: title,
      role: role,
      duration: total_duration,
      description:description,
      organization:organization
    }
    console.log(project);
    firebase.database().ref('projects').push(project);
    console.log(project);
    // setTitle("");
    // setTotal_duration("");
    // setRole("");
    // setOrganization("");
    // setDescription("");

  };



  // const handleOnChangeTitle = (title) => {
  //   setTitle(title.target.value);
  // };
  // // const handleOnChangeStarted = (started) => {
  // //   setStarted(started.target.value);
  // // };
  // const handleOnChangeTotal = (total_duration) => {
  //   setTotal_duration(total_duration.target.value);
  // };
  // const handleOnChangeRole = (role) => {
  //   setRole(role.target.value);
  // };
  // firebase.database().ref('/projects');
  // // const handleSubmit= (e) => {
  // //     e.preventDefault();
  // //     // ???
  // //   }
  // const CreateProject = (e) => {
  //   e.preventDefault();
  //   // const projectRef = firebase.database().ref('projects');
  //     const project = {
  //       title: title.current.value,
  //       // started_at: started.current.value,
  //       total_duration: total_duration.current.value,
  //       role: role.current.value,

  //     }
  // console.log(project);
  //   firebase.database().ref('projects').push(project);
  //   // title.current.value = ''
  //   // // started.current.value = ''
  //   // total_duration.current.value = ''
  //   // role.current.value = ''
  //   console.log(project);
  //   history.push('/projects');
  // };
  const classes = useStyles();

  return (
<div  className="bg-blue-100 w-96 ml-8   h-auto">
  <Form onSubmit="{this.handleSubmit">
  <input name="title"  type = "text" className="rounded-full h-12 m-4  content-center"  placeholder ="Project Title"/>
  <input name="duration"  onChange={(e) => setTotal_duration(e.target.value)} type = "text" className="rounded-full h-12 m-4  content-center"  placeholder ="Total Duration"/>
  <input name="organization"  onChange={(e) => setOrganization(e.target.value)}  type = "text" className="rounded-full h-12 m-4  content-center"  placeholder ="Organization"/>
  <input name="role"   type = "text" onChange={(e) => setRole(e.target.value)} className="rounded-full h-12 m-4  content-center"  placeholder ="Role"/><br></br>
  <TextArea name="description"  onChange={(e) => setDescription(e.target.value)} className = " h-32 w-64 m-4  content-center" type="text"   placeholder="Description"></TextArea><b></b>
  <button className="h-12 hover:from-blue-500 hover:to-purple-500
       bg-blue-300 ml-56 w-32 my-auto items-end border-2 rounded-full" onClick={handleSubmit}>
        Add Project
      </button>
  </Form>
  
    </div>
  
  )
}

export default AddProject;