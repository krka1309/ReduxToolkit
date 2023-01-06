
const initialState={
    id:"",  
};

const iDReducer=(state=initialState ,action)=>{
switch(action.type){
    case 'SET_SELECTED_ID':
        return {...state,id:action.id}
    default:
        return state;
}
}
export default iDReducer;

