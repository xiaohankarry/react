import React from 'react';

import styles from './v-button.module.css'
import propTypes from 'prop-types';

export const UcButton = ({clickHandler,size,style,children})=>{
    return(
        <button
        type='button'
        // 这是看用那种的样式
        className={styles['login-button'] + '' + styles[`login-button--${size}`]}
        style={style}
        onClick={(ev)=>clickHandler(ev)}
        >
            {children ? children : '按钮'}
        </button>
    )
}
UcButton.propTypes = {
    clickHandler:propTypes.func,
    style:propTypes.object,
    size:propTypes.string
}

UcButton.defaultProps = {
    clickHandler:()=>{},
    style:{},
    size:'default'
}