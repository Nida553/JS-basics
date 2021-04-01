import {React,useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 300,
    spacing: 8,
    borderRadius: 28
  },
  small:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
    width : 300,
    spacing: 16,
    borderRadius: 28,
    
  },
  right : {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 70,
    width : 300,
    spacing: 16,
    borderRadius: 28,
    marginLeft: 20
  },
  middle : {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400,
    width : 300,
    spacing: 16,
    borderRadius: 28,
    marginTop : -50
  },
  large : {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400,
    width : 300,
    spacing: 16,
    borderRadius: 28,
    marginTop : -180,
    marginLeft: 20
  },
  mid : {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400,
    width : 300,
    spacing: 16,
    borderRadius: 28,
    marginTop : -50,
    
  },
  midRight : {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400,
    width : 300,
    spacing: 16,
    borderRadius: 28,
    marginTop : -180,
    marginLeft: 20
  }
 
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("projects");


  function getprojects() {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
              projects.push(doc.data());
              console.log(doc.data());
          });
          console.log(projects);
          setLoading(false);
      });

    }
  useEffect(() => {
      getprojects();
  },[]);  
  
  if (loading) {
      <h1>Loading</h1>
  }
console.log(projects);
  return (
    
        <div className={classes.root}>
          {projects.map((project) =>{
            <Grid container  justify="space-around" spacing={9}  >
            <Grid item xs={12} sm={6} spacing = {20}>
                <Paper m={-2} className={classes.small}><h1>hii{project.title}</h1></Paper>
              </Grid>
              </Grid>
          })}
          </div>)}
  //     <Grid container  justify="space-around" spacing={9}  >
  //     <Grid item xs={12} sm={6} spacing = {20}>
  //     {/* {projects.map((project) =>{ */}
  //         <Paper m={-2} className={classes.small}>denis</Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper className={classes.right}></Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper m={-2} className={classes.middle}></Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper className={classes.large}></Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper className={classes.mid}></Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper className={classes.midRight}>x</Paper>
  //       </Grid>
      
  //     </Grid>
      
  //   {/* </div>

  //        <div className={classes.root}> */}
          
          
  //     </div>
  // )

  // return (
  //   <div className={classes.root}>
  //     <Grid container  justify="space-around" spacing={9}  >
  //     <Grid item xs={12} sm={6} spacing = {20}>
  //         <Paper m={-2} className={classes.small}>Dennis</Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper className={classes.right}>xs=12 sm=6</Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper m={-2} className={classes.middle}>xs=12 sm=6</Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper className={classes.large}>xs=12 sm=6</Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper className={classes.mid}>xs=12</Paper>
  //       </Grid>
  //       <Grid item xs={12} sm={6}>
  //         <Paper className={classes.midRight}>xs=12 sm=6</Paper>
  //       </Grid>
       
  //       {/* <Grid item xs={6} sm={3}>
  //         <Paper className={classes.paper}>xs=6 sm=3</Paper>
  //       </Grid>
  //       <Grid item xs={6} sm={3}>
  //         <Paper className={classes.paper}>xs=6 sm=3</Paper>
  //       </Grid>
  //       <Grid item xs={6} sm={3}>
  //         <Paper className={classes.paper}>xs=6 sm=3</Paper>
  //       </Grid>
  //       <Grid item xs={6} sm={3}>
  //         <Paper className={classes.paper}>xs=6 sm=3</Paper>
  //       </Grid> */}
  //     </Grid>
  //   </div>
