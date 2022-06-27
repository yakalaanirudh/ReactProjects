import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
//import About from './components/About'
import Navbar from './components/Navbar'
import OrderSumary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import Admin from './components/Admin'
const LazyAbout =React.lazy(()=>import('./components/About'))



function App(){
    return(
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<React.Suspense fallback="Loading..."><LazyAbout /></React.Suspense>} />
                <Route path='order-summary' element={<OrderSumary />} />
                <Route path='*' element={<NoMatch />} />
                <Route path='products' element={<Products />} >
                    <Route index element={<FeaturedProducts />} />
                    <Route path='featured' element={<FeaturedProducts />} />
                    <Route path='new' element={<NewProducts />} />
                </Route>
                <Route path='users' element={<Users />}>
                    <Route path='users/:userId' element={<UserDetails />} />
                    <Route path='users/admin' element={<Admin />} />
                </Route>
            </Routes> 
        
        </>

    )
}

export default App

/*
Here since there are only 3 users we can configure the routes using the normal typing of the three routes
But what if there are a hundred users there we use dynamic route segments
<Route path='users/:userId' element={<UserDetails />} />
This userId param will match any id (1,2,3,4,5,6,7) as long a sthe pattern is the same
But it will also work if the url is users/admin
*/

/*
Now for users/admin
React will render the admin page
*/

/*
<Route path='users' element={<Users />}>
        <Route path='users/:userId' element={<UserDetails />} />
        <Route path='users/admin' element={<Admin />} />
</Route>
for dynamic routes we can remove users/

<Route path='users' element={<Users />}>
        <Route path=':userId' element={<UserDetails />} />
        <Route path='admin' element={<Admin />} />
</Route>
*/