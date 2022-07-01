import {configureStore} from '@reduxjs/toolkit'

//const reduxLogger=require('redux-logger')

import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'


//const logger=reduxLogger.createLogger()
//This middleware is used after reducer in configureStore




//It accepts an object for argument
//Here we specify a key called reducer and in it write all the reducers from slices that belong to features
const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer,
    },
    //middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),

}) 

export default store            //We use this is index.js by exporting it to dispatch some actions
/*
middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
The arrow function receives  afunction as its argument (getDefaultMiddleware)
In body with (getDefaultMiddleware) we concatinate the list with logger middleware middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
Because configurestore adds some miidleware to store by default
So to default middleware we append logger middleware
*/