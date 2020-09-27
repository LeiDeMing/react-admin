import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routes from './routes'

export interface RouterItem {
    path?: string,
    component?: React.LazyExoticComponent<any>,
    children?: Array<Object>

}

const RouterWrap = (history: any) => {
    let his: any = { hashHistory: {} }
    if (history)
        his.hashHistory = history
    return (
        <HashRouter {...his}>
            <Suspense fallback={<div>loading</div>}>
                <Switch>
                    {
                        routes.map((item: RouterItem, index) => {
                            const Component = item.component
                            if (!Component) return ''
                            return <Route key={index} path={item.path}
                                render={routeProps => <Component __child__={item.children} {...routeProps}></Component>}
                            ></Route>
                        })
                    }
                    {/* <Redirect to='/user/login' /> */}
                </Switch>
            </Suspense>

        </HashRouter >
    )
}

export default RouterWrap
