import React from 'react'
//规定数据类型
import propTypes from 'prop-types'
//为了能够获取上下文的
import {withRouter} from 'react-router-dom'
import styles from './cell.module.css'

/*
* index     number    1
* data      {_id,title,des}
* to        {pathname:'',apiname:''}
* */


 class Cell extends React.Component{

    //默认的数据值
    static defaultProps = {
        index : undefined,//这是判断数据前面的是数字是否出现
        to:null//这是为了做跳转
    }
    //规定数据类型
    static propTypes = {
        index: propTypes.number,
        data:propTypes.shape({
            _id:propTypes.string,
            title:propTypes.string,
            des:propTypes.string
        }
        ).isRequired,//传入的数据
        to:propTypes.shape({
            pathname:propTypes.string,
            apiname:propTypes.string,
        })
    };

    to=(_id)=>{
        //判断有没有传入to
        if(!this.props.to) return;
        let {history,to:{pathname,apiname}} = this.props;
        //进入指定详情页
        history.push({pathname:`${pathname}/${_id}`,serch:`apiname=${apiname}`})
    }
    render(){
        let {index,data,children}  = this.props;
        return(
            <div className={styles['uc-cell']} onClick={()=>this.to(data._id)}>
                {
                    children
                }
                <h2>
                    {/* 判断有没有序列号 */}
                    {index+1 ? <span>{index+1+'.'}</span> : null}
                    {data.title}
                </h2>
                <p>
                    {data.des}
                </p>
            </div>
        )
    }
}


export default withRouter(Cell);


