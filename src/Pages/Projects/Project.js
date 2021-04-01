import React from 'react';
import firebase from 'firebase';


 function Project({ project }) {
  return (
    <div>
      <h1 className={project.complete ? 'complete' : ''}>{Project.title}</h1>
      {/* <button onClick={deleteProject}>Delete</button>
      <button onClick={editProject}>Edit</button> */}

      <button >Delete</button>
      <button>Edit</button>
    </div>
  );
}
export default Project;