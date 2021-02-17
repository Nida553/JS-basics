import React from 'react'
import {BlogData } from './BlogData'
import {Link} from 'react-router-dom';
import { Card, Col,Row} from "antd";
import { excerpt } from '../Util/Excerpt'
import EditIcon from '@material-ui/icons/Edit';
import TrashIcon from '@material-ui/icons/Delete';


const edit = ()=> {
<a href = "/edit">Edit</a>
}

const Bloglist = () => {
    return (
        <>
        <h2>List of blogs</h2>

        {BlogData.map((item)=>{
 return (
    <div className = "site-card-wrapper">
    <Row gutter = {16}>
            <Col span = {8}>
            {/* <ul align = "center">{item.title}</ul>
            <ul>{excerpt(item.description,80," ","...")}</ul> */}
           

                <Card 
                title = { 
                <Link to = {`/blog/${item.id}`}>
                    <a>{item.title}</a>
                    </Link>
                }
                bordered = {true}
                >
                    {/* {excerpt(item.description,80," ","...")} */}
                    {item.description}
                    <EditIcon onClick={edit} />
                    <TrashIcon />
                    </Card>
                    
            </Col>
     </Row>

    </div>
);
        })}
        </>
    );
};
export default Bloglist;