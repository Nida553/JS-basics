import { React, useState, useEffect } from 'react';
import firebase from 'firebase';
import ListProject from './ListProject'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: "white"
      },
      gridList: {
        width: 500,
        height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
      titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      icon: {
        color: 'white',
      },
  }));
  

export default function ListProjects() {
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
    return (
     
            <div className={classes.root}>
 <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {projects.map((project) => (
          <GridListTile style = {{ backgroundColor : "ffb4a2"}} key={project.img} cols={project.featured ? 2 : 1} rows={project.featured ? 2 : 1}>
            {/* <img src={project.img} alt={project.title} /> */}
            <div style = {{ marginTop: "60px", marginLeft : "57px"}}>{project.type}</div>
            
            <GridListTileBar
              title={<span>Title : {project.title}</span>}
              titlePosition="bottom"
            //   subtitle={<span>Role: {project.role}</span>}
              subtitle={<span>Duration: {project.total_duration}</span>}
              actionIcon={
                  
                <IconButton aria-label={`star ${project.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
                
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>




              {/* <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                  <ListSubheader component="div">Portfolio</ListSubheader>
                </GridListTile>
                {projects.map((project) => (
                  <GridListTile key={project.title}>
                    <img src='/one.jpeg' alt={project.title} />
                    <GridListTileBar
                      title={project.title}
                      subtitle={<span>Role: {project.role}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${project.title}`} className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList> */}
            </div>
             
          );
        }
       
    
