import React from 'react'
import {useNavigate} from 'react-router-dom'

function NoMatch(){
    const navigate=useNavigate()
    return (
    <>
        <div>Page Not Found</div>
        <button onClick={()=>navigate('order-summary')}>Place Order</button>
    </>
    )
}

export default  NoMatch