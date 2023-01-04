import EmployeeList from "../../../components/EmployeeList";
const initialState={
    id:"",  
};

function iDReducer(state=initialState ,action){
switch(action.type){
    case 'SET_SELECTED_ID':
        return {...state,id:action.id}
    default:
        return state;
}
}
export default iDReducer;