import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ordered,restocked} from './icecreamSlice'

export const IcecreamView=()=>{
    const [value,setValue] =React.useState(1)
    const numOfIcecreams=useSelector((state)=>state.Icecream.numOfIcecreams)
    const dispatch=useDispatch()

    return(
        <>
            <h2>Number of Icecreams-{numOfIcecreams}</h2>
            <button onClick={()=>dispatch(ordered())}>Order Icecreams</button>
            <input type='number' value={value} onChange={e=>setValue(parseInt(e.target.value))} />
            <button onClick={()=>dispatch(restocked(value))}>Restock Icecreams</button>
        </>
        
    )
}
/*
It is used to set the amount by which the icecreams must be restocked

const [value,setValue] =useState(1)


*/