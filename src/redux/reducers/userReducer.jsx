import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { setStoreJSON, USER_LOGIN } from '../../util/config';

const initialState = {
    userLogin: ''
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {

  }
});

export const {} = userReducer.actions

export default userReducer.reducer

// -----------Action Api--------------

export const singUpAPI = (user)=>{
    return async(dispatch)=>{
        try{
            let result = await axios({
                url: 'https://shop.cyberlearn.vn/api/Users/signup',
                method: 'POST'
            })
            setStoreJSON(USER_LOGIN,result.data.content)
        }
        catch{

        }
    }
}