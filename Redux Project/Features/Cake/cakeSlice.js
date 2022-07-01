import {createSlice} from '@reduxjs/toolkit'      //Importing createSlice from rtk //It uses immer library inherently


const initialState={
    numOfCakes:10
}

//The below function accepts an object as a parameter
//In that object we specify three properties
//The first property is name of the slice
//The second property is initial state for that slice
//The third is the reducer function It is an object
//Within the object we specify individual state transitions
//Each state transition receives state and action as arguments

const cakeSlice=createSlice({
    name:'cake',
    initialState:initialState,
    reducers:{
        ordered:(state)=>{                   //We can also write ordered:(state,action)=>{  We didnt write actiona s we reducing by one
            state.numOfCakes--
        },
        restocked:(state,action)=>{
            state.numOfCakes+=action.payload
        }
    }
})


//In the above cakeSlice we have written reducer functions
//createSlice automatically generates action creators with the same name (ordered,restocked)
//It also provides the main reducer function which we can provide to our redux store
export default cakeSlice.reducer                    //The reducer is exported here
export const {ordered,restocked}=cakeSlice.actions        

//This slice actively takes care of
//Defining an action type constant
//An action object
//An action creator
//The switch statements in the reducer
//Handling mutable updates in the reducer