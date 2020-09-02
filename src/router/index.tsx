import React, { Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes'
console.log(routes)
const RouterWrap = (props: any) => {

    return (
        <HashRouter>
            <Suspense fallback={<div>loading</div>}>
                <Switch>
                    {
                        routes.map(item => <Route path={item.path} component={item.component}></Route>)
                    }
                </Switch>
            </Suspense>

        </HashRouter >
    )
}

export default RouterWrap
