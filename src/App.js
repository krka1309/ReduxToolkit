import './App.css';
import 'antd/dist/reset.css';
import {  Route,Routes,useNavigate } from 'react-router-dom';
import Employee from './components/EmployeeList';
import {Button} from 'react-bootstrap';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import {connect} from 'react-redux'
import { PureComponent } from 'react';
import { setSelectedId } from './container/redux/actions/iDActions';
import EmployeeDetails from './components/EmployeeDetails';

function App () { 
  
const navigate=useNavigate();

const navigateToEmployee=()=>{
  <EmployeeList/>
  navigate('/EmployeeList')
}
const navigateHome = () => {
  navigate('/');
};

  return (
    <div className="App">
      
      {/* <Button  className="buttonclick"onClick={navigateHome} ></Button><br/><br></br>
      <Button className="buttonclick"onClick={navigateToEmployee}></Button>
       */}
       <Routes>
        <Route path="/EmployeeList" element={<EmployeeList/>}/>
        <Route path="/" element={<Home/>}/>
        
       </Routes>
       <EmployeeDetails/>
    </div>
  );
}

export default App;