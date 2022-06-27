import React from 'react'
import {useNavigate} from 'react-router-dom'

function OrderSumary(){
    return(
        <>
            <div>Order Confirmed</div>
            <button onClick={()=>navigate(-1)}>Place Order</button>
        </>
        
    )
}

export default OrderSumary

/*
<button onClick={()=>navigate(-1)}>Place Order</button>
It uses the history API
*/