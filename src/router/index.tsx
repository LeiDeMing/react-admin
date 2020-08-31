import React, { Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes'

const routerWrap = () => {

    return <HashRouter>
        <Suspense fallback={<div>loading</div>}>
            <Switch>

            </Switch>
        </Suspense>

    </HashRouter >
}
