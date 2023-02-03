import { GET_STATE_EMPLOYEE } from "../contants/action-types";

const initialState = {
    loading: false,
    error: null,
    selectedEmployee: {
        id: "",
    },
    employeeList: [],

};

const iDReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SELECTED_ID":
            return { ...state, loading: true, selectedEmployee: { id: action.id } }
        // case 'GET_EMPLOYEE_LIST':
        //     return [action.data]
        case "SET_EMPLOYEE_LIST":
            return { ...state, employeeList: action.payload };
        // case "FILTER_STATE_EMPLOYEE":
        //     return {...state,filteredEmployeeName:action.payload};
        default:
            return state;
    }
}
export default iDReducer;

