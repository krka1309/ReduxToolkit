import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const EmployeeComponent = () => {
    const employees=useSelector((state)=>state.allId.id);
    const renderList=employees.map((id)=>{
        const{id,name,email,address}=id;
        return(
            <div className="four wide column" key={id}>
            <Link to={`/EmployeeList/${id}`}>
              <div className="ui link cards">
                <div className="card">
                 
                  <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta price">$ {email}</div>
                    <div className="meta">{address}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      });
        
  return (
    <div>
      {renderList}
    </div>
  )
}

export default EmployeeComponent
