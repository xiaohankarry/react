import React,{Component} from 'react';

import $ from 'jquery';
import Swipe from './assets/js/swipe'

import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom';
import styles from  './v-swiper.module.css';

class ViSwiper extends Component{

    static propTypes = {
        data:propTypes.arrayOf(
            propTypes.shape({
                _id:propTypes.string.isRequired,
                title:propTypes.string,
                sub_title:propTypes.string,
                banner:propTypes.string.isRequired
            })
        ).isRequired,
        to:propTypes.shape({
            pathname:propTypes.string,
            apiname:propTypes.string
        })
    }
    to=(_id)=>{
        if(this.props.to) return;
        let {history,to:{pathname,apiname}} = this.props;
        history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`})
    }

    //让轮播图动起来在挂载之前
    componentDidMount(){
        new Swipe($('.style_banner__q5UEw')[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
              $('.banner ol li').removeClass('active');
              $('.banner ol li').eq(index).addClass('active');
            }
          })
        }
    
    render(){
        let {data} = this.props;
        return(
            <div className={styles.banner}>
                <ul className={styles.clearfix}>
                    {
                        data.map(item=>(
                            <li key={item._id} onClick={()=>this.to(item._id)}>
                                <img src={item.banner} alt=''/>
                                <div className={styles['text-box']}>
                                    <h2>{item.title}</h2>
                                    <p>{item.sub_title}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default withRouter(ViSwiper)