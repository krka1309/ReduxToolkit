import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { setSelectedId, getEmployeeList } from "../container/redux/Slices/userSlice"
import "../App.css"
import { Button } from 'react-bootstrap'
import { filterEmployeeList } from '../container/redux/Slices/userSlice'
import { filterEmployee } from '../container/redux/Slices/filterSlice'
const EmployeeList = (props) => {
  const [searchedText,setsearchedText]=useState("");
  let navigate = useNavigate();
  
const handleSubmit=(e)=>{
  e.preventDefault();
  props.searchEmployee(searchedText); 
}
  useEffect(() => {
   props.getUsers();
  }, [])

  const handleClick = (record) => {
    navigate("/EmployeeDetails");
    props.setSelectedId(record.id);
    <Button >Edit</Button>
  }

  const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'key',
    render: (name, record) => {
      return <a style={{ color: 'blue' }} key={record} value={record} onClick={() => handleClick(record)}>{name}</a>
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
    render: address => {
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
      <form  >
      <input placeholder='Search Here ...'
      value={searchedText} 
      onChange={(e)=>setsearchedText(e.target.value)}
      />
      <Button type='submit' onClick={handleSubmit}>Search</Button>
      </form>
      {/* <Input.Search placeholder='Serach Here...'
        onSearch={(value)=>{
          setsearchedText(value);
        }}
      /> */}
      <Table className='TableClass' id='Customer1'
        style={{ whiteSpace: 'pre' }}
        dataSource={props.employeeList}
        columns={columns}
        key={columns.id}
      >
      </Table>
    </div>
  )
}
const mapStateToProps = (state) => ({
  id: state.employee.id,
  employeeList: state.employee.employeeList,


});

const mapDispatchToProps = (dispatch) => ({
  setSelectedId: (data) => dispatch(setSelectedId(data)),
  getUsers() {
    dispatch(getEmployeeList())
  },
  searchEmployee:(query)=> dispatch(filterEmployeeList(query)),
  }

);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);



// import React from 'react'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { Table } from 'antd'
// import { connect, useDispatch, useSelector } from 'react-redux'
// import { setSelectedId,getEmployeeList } from '../container/redux/actions/iDActions'
// import "../App.css"
// import { Button } from 'react-bootstrap'
// import { GET_EMPLOYEE_LIST } from '../container/redux/contants/action-types'


// const EmployeeList = (props) => {
//   // const [data, setData] = useState([]);
//   const[q,setQ]=useState("");
//   const [searchParam]=useState(["name"])
//   const loading = useSelector(state => state.loading);
//   const error = useSelector(state => state.error);
//   let navigate = useNavigate();
  
  
  
//   useEffect(() => {
//     // (fetchRecords());
//    props.getUsers();
//   }, [])

//   const handleClick = (record) => {
//     navigate("/EmployeeDetails");
//     props.setSelectedId(record.id);
//     <Button >Edit</Button>
//   }
//   // const fetchRecords = () => {
//   //   return axios.get(url).then((response) => setData(response.data))
//   // }
//   const columns = [{
//     title: 'Id',
//     dataIndex: 'id',
//     key: 'key'
//   },
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'key',
//     render: (name, record) => {
//       return <a style={{ color: 'blue' }} key={record} value={record} onClick={() => handleClick(record)}>{name}</a>
//     }
//   },
//   {
//     title: 'Username',
//     dataIndex: 'username',
//     key: 'key'
//   }, {
//     title: 'Email',
//     dataIndex: 'email'
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: "Id",
//     render: address => {
//       return address.city
//     }
//   },
//   {
//     title: 'Website',
//     dataIndex: 'website'
//   },
//   {
//     title: 'Phone-No',
//     dataIndex: 'phone'
//   },


//   ]

//   return (
//     <div id='Customer2'>
//       <h1>Employee List</h1>
     
//       <input
//       type="search"
//       name="search-form"
//       id="search-form"
//       className="search-input"
//       placeholder="Search for..."
//       value={q}
//       onChange={(e)=>setQ(e.target.value)}/>
//       <Table className='TableClass' id='Customer1'
//         style={{ whiteSpace: 'pre' }}
//         dataSource={props.employeeList}
//         columns={columns}
//         key={columns.name}
//       >
//       </Table>

//     </div>
//   )
// }
// const mapStateToProps = (state) => ({
//   id: state.employee.id,
//   employeeList:state.employee.employeeList,
// });
// // export const url = "https://jsonplaceholder.typicode.com/users";

// const mapDispatchToProps = (dispatch) => ({
//   setSelectedId: (data) => dispatch(setSelectedId(data)),
//   getUsers() {
//     dispatch(getEmployeeList())
//   }

// });

// export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);



