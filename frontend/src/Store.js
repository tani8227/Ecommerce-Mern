import  { configureStore } from '@reduxjs/toolkit'
import {AuthReducer} from './reducers/AuthReducer.js'







export const store= configureStore(
    {
        reducer:
        {
            Auth: AuthReducer,

        }
    })
    
    