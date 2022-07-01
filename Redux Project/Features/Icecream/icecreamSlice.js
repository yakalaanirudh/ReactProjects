import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState={
    numOfIcecreams:20
}


const cakeSlice=createSlice({
    name:'icecream',
    initialState:initialState,
    reducers:{
        ordered:(state)=>{                   
            state.numOfIcecreams--
        },
        restocked:(state,action)=>{
            state.numOfIcecreams+=action.payload
        }
    },
    /*
    extraReducers:{
        ['cake/ordered']:(state)=>{                          //['cake/ordered']:(state,action)=>{
            state.numOfIcecreams--
        }
    }
    */
   extraReducers:(builder)=>{
    builder.addCase(cakeOrdered,(state)=>{
        state.numOfIcecreams--
    })
   }
})

export default icecreamSlice.reducer                    //The reducer is exported here
export const {ordered,restocked}=icecreamSlice.actions        //destructuring and exporting

/*
extraReducers:(builder)=>{
    builder.addCase(cakeActions.ordered,(state)=>{
        state.numOfIcecreams--
    })
   }

Here extraReducers is a function which receives an argument named builder
This builder is used to add a new case
The second argument is a function which receives state and action as arguments
*/