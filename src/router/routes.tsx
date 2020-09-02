import React from 'react'
import { register } from '@/serviceWorker'
const UserLayout = React.lazy(() => import('@/layouts/UserLayout'))
const BasicLayout = React.lazy(() => import('@/layouts/BasicLayout'))
const Login = React.lazy(() => import('@/pages/Login'))
const Register = React.lazy(() => import('@/pages/Register'))

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