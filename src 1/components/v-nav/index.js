import React from 'react'
import styles from './v-nav.module.css'
import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
 class Nav extends React.Component{
     static defadultProps = {
         bgColor:'#fff',
         arrow:'default',
         borderWidth:1
     };
     static propTypes={
         bgColor:propTypes.string,
         arrow:propTypes.string,
         borderWidth:propTypes.number
     }
    render(){
        let {history,borderWidth,bgColor,arrow} = this.props;
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
}
export default withRouter(Nav)