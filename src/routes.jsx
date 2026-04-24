import{
    createRootRoute,
    createRoute,
    createRouter,
    Link,
    Outlet,

} from '@tanstack/react-router'

import Home from './components/Home'
import Carparts from './components/CarParts'
import './App.css'

const RootRoute = createRootRoute({
    component: function RootLayout(){
        return(
            <>
            <nav style={{display: 'flex', gap: '1rem', padding: '1rem'}}>
                <Link to="/Home" activeProps={{style: {fontWeight: 'bold'}}}>
                Home
                </Link>
                <Link to="/CarParts" activeProps={{style: { fontWeight: 'bold'}}}> 
                carParts
                </Link>
                
            </nav>
            <section id="center">
                <Outlet />
            </section>

            </>
            )
        },
})


const indexRoute = createRoute({
    getParentRoute: () => RootRoute,
    path: '/Home',
    component: Home ,
})

const quizRoute = createRoute({
    getParentRoute: () => RootRoute,
    path: '/CarParts',
    component: Carparts ,
})



const routeTree = RootRoute.addChildren([indexRoute, quizRoute])

export const router = createRouter({
    routeTree,
})