import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import '../auth.css'
import firebase from 'firebase'


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
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();

    const projectRef = firebase.database().ref('projects');
    const project = {
      title: title,
      role: role,
      total_duration: total_duration
    }
    firebase.database().ref('projects').push(project);
    setTitle("");
    setTotal_duration("");
    setRole("");
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
  // const handleSubmit= (e) => {
  //     e.preventDefault();
  //     // ???
  //   }
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

    // <form className={classes.root} onSubmit={handleSubmit}  >
    
    //  <FormGroup>
    //     <Label>Title</Label>
    //     <Input type="text" value={title} onChange={onChange} name="title" placeholder="Enter title" required></Input>
    //   </FormGroup>
    //   <Button type="submit">Submit</Button>
    // </form>

    <div></div>
  );
}

export default AddProject;