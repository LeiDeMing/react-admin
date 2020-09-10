import React from "react"
import styles from './index.module.scss'
import { Switch, Route } from 'react-router-dom';
import { RouterItem } from '@/router'

const UserLayout: React.FunctionComponent<any> = (props): JSX.Element => {
    const { __child__, match: { path } } = props
    console.log(props)
    return <React.Fragment>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
        <div className={styles.text}>
            <Switch>
                {
                    __child__.map((item: RouterItem, index: number) => {
                        if (!('redirect' in item)) {
                            return <Route key={index} path={path + item.path} component={item.component}></Route>
                        }
                        return ''
                    })
                }
                <Route></Route>
            </Switch>
        </div>
    </React.Fragment>
}

export default UserLayout