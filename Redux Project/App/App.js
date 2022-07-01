import React from 'react'
import {CakeView} from './features/cake/CakeView'
import {IcecreamView} from './features/Icecream/IcecreamView'
import {UserView} from './features/User/UserView'


export const App=()=>{
    return(
        <>
            <CakeView />
            <IcecreamView />
            <UserView />
        </>
        
    )
}