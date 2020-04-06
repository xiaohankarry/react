import React from 'react'
import styles from './v-nav.module.css'
import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

let Nav = ({history,borderWidth,bgColor,arrow})=>{
    return(
        <div 
        className={styles.nav}
        style={
           { background:bgColor,
            borderWidth}
        }
        >
            <div className={styles.arrow}>
                <div
                className={arrow === 'gray' ? styles.gray : styles.default}
                onClick ={()=>history.go(-1)}
                ></div>
            </div>
        </div>
    )
}

Nav.propTypes = {
    bgColor:propTypes.string,
    arrow:propTypes.string,
    borderWidth:propTypes.number
}

Nav.defadultProps = {
    bgColor:'#fff',
    arrow:'default',
    borderWidth:1
}
export default withRouter(Nav)