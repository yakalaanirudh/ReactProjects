import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'

function Products(){
    return (
        <>
            <div>Products Page</div>
            <input type='search' placeholder='Search Products'></input>
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='New'>New</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Products

/*
Relative Links
<Link to='featured'>Featured</Link>
Here in to we are not typing /featured beacuse a relative link
inherits the earlier part of url and appens the path specified in to to earlier path

If we want to use absolute paths
<Link to='/featured'>Featured</Link> will break

we have to give
<Link to='products/featured'>Featured</Link> to work
*/