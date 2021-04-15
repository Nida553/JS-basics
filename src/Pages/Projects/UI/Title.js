import React from 'react'

export default function Title(props) {
    return (
        <div>
            <p >
            <h1 className="m-4">
              <b>{props.title}</b>
            </h1>

            <h2 className="m-4">{props.date}</h2>
          </p>
          <span className="rounded-full bg-blue-300 items-start py-2 px-6 border-black-500 ml-4 my-8    w-8 border-2">
            {props.tech}
            </span>
          <span className="rounded-full bg-blue-300 items-start py-2 px-6 border-black-500 ml-4 my-8    w-8 border-2">
           {props.stack}
            </span>
          <p className="mt-2 m-4">{props.description}
            </p>
            <b className="m-4">Organization:</b>
          <b className="m-4">{props.organization}</b>
         <br></br>
         <b className="m-4">Role:</b>
          <b className="m-4">{props.role}</b>
          <img class="h-24 w-64 m-4 ml-24" src={props.image} />
        </div>
    )
}
