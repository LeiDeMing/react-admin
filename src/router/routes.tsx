import React from 'react'
const UserLayout = React.lazy(() => import('@/layouts/UserLayout'))
const BasicLayout = React.lazy(() => import('@/layouts/BasicLayout'))

export default [
    {
        path: '/user',
        component: UserLayout,
        children: [

        ]
    },
    {
        path: '/',
        component: BasicLayout,
        children: []
    }
]