import {REGISTER} from '../Types/types'

export const register = (data) =>dispatch=>{

 return dispatch({
    type:REGISTER,
    data: data
 });
}