import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Buttons(props) {

    const history = useHistory();
    const AddProject = () => {
  
        console.log(history);
        history.push('/add');
      }
    return (
        <div>
                  <button className="h-12 bg-blue-300
       w-32 my-auto h-8 items-end border-2 rounded-full" onClick={AddProject}>
        {props.name}
      </button>
    
        </div>
    )
}
