
import 'antd/dist/reset.css';
import {  Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import Edit from './components/Edit';

function App () { 
  return (
    <div className="App">
      
      {/* <Button  className="buttonclick"onClick={navigateHome} ></Button><br/><br></br>
      <Button className="buttonclick"onClick={navigateToEmployee}></Button>
       */}
       <Routes>
        <Route path="/EmployeeList" element={<EmployeeList />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/EmployeeDetails" element={<EmployeeDetails />}/>
       </Routes>
  
    </div>
  );
}
export default App;