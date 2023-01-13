import {SET_SELECTED_ID} from "../contants/action-types"
export function setSelectedId(data){
    return {
        type:SET_SELECTED_ID,
         id:data,
       // payload:users,
    };
}

