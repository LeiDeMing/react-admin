import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routes from './routes'

interface RouterItem {
    path: string,
    component: React.LazyExoticComponent<any>,
    children: Array<Object>

}

const RouterWrap = () => {

    return (
        <HashRouter>
            <Suspense fallback={<div>loading</div>}>
                <Switch>
                    {
                        routes.map((item: RouterItem, index) => {
                            return <Route _self_children={item.children} key={index} path={item.path} component={item.component}></Route>
                        })
                    }
                    {/* <Redirect to='/user/login' /> */}
                </Switch>
            </Suspense>

        </HashRouter >
    )
}

export default RouterWrap
