import React from 'react';

import styles from './v-button.module.css'
import propTypes from 'prop-types';

export default class UcButton extends React.Component{
    //一些默认数据，事件
    static defaultProps={
        clickHandler:()=>{},
        style:{},
        size:'default'
    };
    static propTypes={
        clickHandler:propTypes.func,
        style:propTypes.object,
        size:propTypes.string
    }
    render(){
        let {clickHandler,size,style,children} = this.props;
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
}