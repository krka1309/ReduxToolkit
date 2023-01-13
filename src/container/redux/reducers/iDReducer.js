
const initialState={
    id:"",
    loading:false,
    error:null,  
};

const iDReducer=(state=initialState ,action)=>{
switch(action.type){
    case 'SET_SELECTED_ID':
        return {...state,loading:true,id:action.id}
    default:
        return state;
}
}
export default iDReducer;

