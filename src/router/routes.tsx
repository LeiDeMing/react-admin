import React from 'react'
const UserLayout = React.lazy(() => import('@/layouts/UserLayout'))
const BasicLayout = React.lazy(() => import('@/layouts/BasicLayout'))
const Login = React.lazy(() => import('@/pages/Login'))

export default [
    {
        path: '/user',
        component: UserLayout,
        children: [
            {
                path: '/login',
                component: Login
            },
            // {
            //     path: '/register',
            //     component: Register
            // },
            {
                path: '/',
                redirect: '/user/login'
            }
        ]
    },
    {
        path: '/',
        component: BasicLayout,
        children: []
    }
]