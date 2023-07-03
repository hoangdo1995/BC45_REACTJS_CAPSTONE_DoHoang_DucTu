import {configureStore} from '@reduxjs/toolkit'
import UserRegisterReducer from './reducers/UserRegisterReducer'
import UserLoginReducer from './reducers/UserLoginReducer'

export const store = configureStore({
    reducer:{
        UserRegisterReducer:UserRegisterReducer,
        UserLoginReducer:UserLoginReducer
    }
})