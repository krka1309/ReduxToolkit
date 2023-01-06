import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { setSelectedId } from '../container/redux/actions/iDActions'
import "../App.css"

const EmployeeList = (props) => {
  const [data, setData] = useState([]);
     let navigate=useNavigate();
       useEffect(() => {
    fetchRecords()
      }, [])
  const handleClick=(record)=>{
  navigate("/EmployeeDetails");
  props.setSelectedId(record.id);
}
const fetchRecords = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>setData(response.data))
  }
  const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'key'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'key',
    render: (name,record) => {
      return <a style={{ color: 'blue' }} value={record} onClick={()=>handleClick(record)}>{name}</a>
    }
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'key'
  }, {
    title: 'Email',
    dataIndex: 'email'
  }, 
  {
    title: 'Address',
    dataIndex: 'address',
    key: "Id",
    render:address=>{
      return address.city
    }
  },
  {
    title: 'Website',
    dataIndex: 'website'
  },
  {
    title: 'Phone-No',
    dataIndex: 'phone'
  }, 
  ]
  
  return (
    <div id='Customer2'>
   <h1>Employee List</h1>
      <Table className='TableClass' id='Customer1'
        style={{ whiteSpace: 'pre' }}
        dataSource={data}
        columns={columns}
        key={columns}>
      </Table>
      </div>
  )
}
const mapStateToProps = (state) => ({
  id: state.id,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedId: (data) => dispatch(setSelectedId(data)),
  
});

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList);


