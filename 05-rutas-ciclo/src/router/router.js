import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

// import AboutPage from '../modules/naruto/pages/AboutPage'
// import ListPage from '../modules/naruto/pages/ListPage'
// import NarutoPage from '../modules/naruto/pages/NarutoPage'
// import NoPageFound from '../modules/shared/pages/NoPageFound'

const routes = [
    {
        path:'/',
        redirect: 'naruto'
    },
    {
        path: '/naruto',
        name: 'naruto',
        component: () => import(/*webpackChunkName: "NarutoLayout"*/'../modules/naruto/layouts/NarutoLayout'),
        children: [
            { 
                path: 'home',
                name: 'naruto-home', 
                component: () => import(/*webpackChunkName: "ListPage"*/'../modules/naruto/pages/ListPage') 
            },
            // { path: '/about', component: AboutPage },
            // LazyLoad 👇
            { 
                path: 'about', 
                name: 'naruto-about',
                component: () => import(/*webpackChunkName: "AboutPage"*/'../modules/naruto/pages/AboutPage')
            },
            { 
                path: 'characterid/:id', 
                name: 'character-id', component: () => import(/*webpackChunkName: "NarutoPage"*/'../modules/naruto/pages/NarutoPage'),
                props: ( route ) => {
                    console.log(route)
                    const id = Number(route.params.id)
                    return isNaN(id) ? {id:1} : {id}
                        // id: id,
                        // nombre: 'Sandy',
                        // apellido: 'Astorga'
                    
                }
            },
            {
                path:'',
                redirect: {name: 'naruto-about'}
            },
        ]
    },
    // DBZ Layout
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [isAuthenticatedGuard],
        component: () => import(/*webpackChunkName: "DragonBallLayout"*/'../modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/*webpackChunkName: "Charactersdbz"*/'../modules/dbz/pages/Characters'),
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/*webpackChunkName: "Aboutdbz"*/'../modules/dbz/pages/About'),
            },
            {
                path:'',
                redirect: {name: 'dbz-characters'}
            },
        ]
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/*webpackChunkName: "NoPageFound"*/'../modules/shared/pages/NoPageFound'),
        // redirect: '/home'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

// Guard Global - Síncrono
// router.beforeEach( ( to, from, next ) => {
//     console.log({ to, from, next });

//     const random = Math.random() * 100
//     if( random > 50 ) {
//         console.log('autenticado')
//         next()
//     } else {
//         console.log(random, 'bloqueado por el beforeEach Guard')
//         next({ name: 'naruto-home' })
//     }
//     next()
// })

// const canAccess = () => {
//     return new Promise( resolve => {

//         const random = Math.random() * 100
//         if( random > 50 ) {
//             console.log('Autenticado - canAccess')
//             resolve(true)
//         } else {
//             console.log(random, 'bloqueado por el beforeEach Guard - canAccess')
//             resolve(false)
//         }

//     })
// }

// router.beforeEach( async(to, from, next) => {

//     const authorized = await canAccess()

//     authorized 
//         ? next()
//         : next({ name: 'naruto-home' })

// })


export default router