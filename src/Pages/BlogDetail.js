import React from 'react'
import {BlogData } from './BlogData'
import { useParams} from 'react-router-dom';


 const BlogDetail = () => {
    const params = useParams();
    const { id } = params;
    const filterBlog = BlogData.filter((item)=> item.id===id) ;
    return (
        <>
           <h2>Blog detail</h2>
           {filterBlog.map((item) => {
               return (
                   <>
                   <h1>{item.title}</h1>
                   <p>{item.description}</p>
                   </>
               );
           })}
        </>
     
    )  ;
};
export default BlogDetail