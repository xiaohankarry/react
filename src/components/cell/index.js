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


 let Cell  = ({to,history,data,index,children})=>{

    let navigator = (_id)=>{
        if(!to) return;
        let {pathname,apiname} = to;
        //进入指定详情页
        history.push({pathname:`${pathname}/${_id}`,serch:`apiname=${apiname}`})
    }
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

 Cell.defaultProps = {
     index : undefined,
     to : null
 }

 Cell.propTypes = {
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
 }
   

    


export default withRouter(Cell);


