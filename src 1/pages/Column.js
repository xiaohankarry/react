import React,{Component} from 'react'

import ViSwiper from '../components/v-swiper';
import Cell from '../components/cell'

export default class Column extends Component{
    render(){
        return(
            <div className='pt'>
                <Cell
                    data={{_id:1,title:'hanhanhan',des:'wangjunkai'}}
                    to={{patname:'./detail',apiname:'home'}}
                >
                    <button style={{float:'right'}}>+</button>
                </Cell>
                <Cell
                    data={{_id:1,title:'hanhanhan',des:'wangjunkai'}}
                    to={{patname:'./detail',apiname:'home'}}
                >
                    <button style={{float:'right'}}>+</button>
                </Cell>
            </div>
        )
    }
}