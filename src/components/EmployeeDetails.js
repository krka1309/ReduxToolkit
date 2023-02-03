import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap'
import "../App.css"
const EmployeeDetails = () => {
  const [post, setPost] = useState("");
  const emp = useSelector(state => state);

  const fetchDetails = (empid) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${empid}`).then((response) =>
      setPost(response.data))
  }
  useEffect(() => {
    fetchDetails(emp.employee.selectedEmployee.id.id);
  }, [])

  return (
    <div>

      <Table id='Customer'>
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
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.username}</td>
            <td>{post.email}</td>
            <th>{post.phone}</th>
            <th>{post.website}</th>

          </tr>
        </tbody>
      </Table>

    </div>
  )
}
export default EmployeeDetails;
