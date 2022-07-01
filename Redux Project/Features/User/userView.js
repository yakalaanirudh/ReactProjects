import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchUsers} from './userSlice'

export const UserView=()=>{
    const user=useSelector(state=>state.user)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    return(
        <>
            <h2>List of Users</h2>
            {user.loading && <div>Loading...</div>}
            {!user.loading &&user.error ?<div>Error:{user.error}</div>:null}
            {!user.loading &&user.users.length?(
                <ul>
                    {user.users.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ):null}
        </>
        
    )
}

/*
{user.loading && <div>Loading...</div>}
If user.loading is true we show a Loading text

{!user.loading &&user.error ?<div>Error:{user.error}</div>:null}
If user.loading is false and there is an error we display that error or we display null


{!user.loading &&user.users.length?(
    <ul>
        {user.users.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
):null}
If user.loading is false and there users.length is greater tahn 0 we map every user or we dispaly null

*/