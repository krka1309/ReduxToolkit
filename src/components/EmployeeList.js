import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { App, Table } from 'antd'
import { connect, useDispatch, useSelector } from 'react-redux'
import { setSelectedId } from '../container/redux/actions/iDActions'
import store from '../container/redux/store'

const EmployeeList = (props) => {
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    fetchRecords()
  }, [])
  const handleClick=(record)=>{
  // alert(record.id);
 
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
  }
  ]
  
 
  return (
    <div>
   <h1>
      Employee List
      </h1>
      
      <Table className='TableClass'
        style={{ whiteSpace: 'pre' }}
        dataSource={data}
        columns={columns}
        key={columns}>
      </Table>
      {/* <div onClick={handleClick}>
             {columns.name} */}
       {/* </div> */}
       
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


