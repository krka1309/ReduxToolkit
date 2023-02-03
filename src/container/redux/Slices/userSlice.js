import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    selectedEmployee: {
        id: "",
    },
    employeeList: [],

};

const iDReducer = createSlice({
    name: "users",
    initialState,
    reducers: {
        setSelectedId: (state, action) => {
            state.loading = true;
            state.selectedEmployee.id = { id: action.payload }
        },
        getEmployeeList:(state,action)=>{

        },
        setEmployeeList: (state, action) => {
            state.employeeList = action.payload;
        },
        filterEmployeeList: (state,action,) => {
           state.filteredEmployeeName = action.payload;
        }
    }
})

// const iDReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "SET_SELECTED_ID":
//             return { ...state, loading: true, selectedEmployee: { id: action.id } }
//         // case 'GET_EMPLOYEE_LIST':
//         //     return [action.data]
//         case "SET_EMPLOYEE_LIST":
//             return { ...state, employeeList: action.payload };
//         // case "FILTER_STATE_EMPLOYEE":
//         //     return {...state,filteredEmployeeName:action.payload};
//         default:
//             return state;
//     }
// }
export const { actions: {
    setEmployeeList, setSelectedId, filterEmployeeList,getEmployeeList
} }=iDReducer;
export default iDReducer.reducer;

