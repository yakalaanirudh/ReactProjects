import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ordered,restocked} from './cakeSlice'

export const cakeView=()=>{
    const numOfCakes=useSelector((state)=>state.cake.numberOfCakes)
    const dispatch=useDispatch()
    
    return(
        <>
            <h2>Number of Cakes-{numOfCakes}</h2>
            <button onClick={()=>dispatch(ordered())}>Order Cake</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock Cakes</button>
        </>
        
    )
}

/*
useSelector receives a function as its parameter
The function uses redux state as its argument
            state.cake.numberOfCakes .cake because it is the key for cakeSlice  in the reducer 

*/