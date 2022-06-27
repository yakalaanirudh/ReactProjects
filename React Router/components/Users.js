import React from 'react'
import {outlet,useSearchParams} from 'react-router-dom'

function Users(){
    const [searchParams,setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter')==='active'  //Checks if there is a filter in the url parameters

    return(
        <>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>
            <outlet /> 
            <div>
                <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>    
                <button onClick={()=>setSearchParams({})}>Reset Filter</button>
            </div>
            {showActiveUsers?(
                <h2>Showing active users</h2>
            ):(
                <h2>Showing all users</h2>
            )}
        </>
    )
}

export default Users
/*
{showActiveUsers?(
    <h2>Showing active users</h2>
    ):(
    <h2>Showing all users</h2>
)}

If we click on Active users a h2 tag displays Showing active users
If we click on Reset Filter a h2 tag displays Showing all users

*/

