import React from "react"
import styles from './index.module.scss'
import { RouterComponent } from '@/types'

const UserLayout = (props: RouterComponent) => {
    console.log(props)
    return <React.Fragment>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
        <div className={styles.text}>
            这是星空背景,内容需要再次定位。
        </div>
    </React.Fragment>
}

export default UserLayout