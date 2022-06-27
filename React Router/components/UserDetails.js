import React from 'react'
import {useParams} from 'react-router-dom'

function UserDetails(){
    const params=useParams()
    const userId=params.userId
    return(
        <>
            <p>Details about user {userId}</p>
        </>
    )
}

export default UserDetails

/*
const params=useParams()
This object params contains the key value pairs from current url


const userId=params.userId
This userId is related to the :userId in the dynamic route config
 <Route path='users/:userId' element={<UserDetails />} />


 Now the user details changes from
 Details about user to
 Details about user 1
 
*/