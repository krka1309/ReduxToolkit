import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { useEffect } from 'react';
import {Button, Table} from 'react-bootstrap'
import "../App.css"
import Edit from './Edit';
import EmployeeList from './EmployeeList';
const EmployeeDetails = (props) => {
  const [edit,setEditing]=useState(false);
   
  const [post,setPost]=useState("");
  const emp = useSelector(state => state);
  // const employee=emp.allId.id;
  const fetchDetails = (empid) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${empid}`).then((response) => 
      setPost(response.data))
  }
  const [name,setName]=useState(EmployeeList.id);
  useEffect(() => {
      fetchDetails(emp.allId.id);
  }, [])
  const handleEdit=(id)=>{
    // alert(employee);
setEditing(true)
  }
  // console.log(emp.allId.id)
  return(
    <div>
  
   <Table id='Customer'> 
      {/* <h3>Name:{post.name}</h3>
      <h3>Username:{post.username}</h3>
      <h3>Email:{post.email}</h3> */}
      <thead>
        <tr>
          
          <th>Id</th>
          <th> Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
         

        </tr>
      </thead>
      <tbody>
      <tr>
      {/* { edit ?  (<div><td><input value={post.id} onChange={(e)=>setName(e.target.value) } /></td>  </div>)    :  (<div></div>)} */}
          {/* <td>{post.id}</td> */}
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td>{post.username}</td>
          <td>{post.email}</td>
          {/* <th>{post.address}</th> */}
          <th>{post.phone}</th>
          <th>{post.website}</th>
          <th><Button onClick={()=>handleEdit()}>Edit</Button></th>
        
        </tr>
      </tbody>
    </Table>
    
    </div>
  )
  }
export default EmployeeDetails;
