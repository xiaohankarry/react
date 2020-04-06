import React,{Component} from 'react'

import Cell from '../components/cell'
import {UcButton} from '../components/v-button'
import ViSwiper from '../components/v-swiper'

export default class Home extends Component{

    state ={
        bannar :[],
        Home:[]
    }
    //可以抓取数据
    // constructor(props){
    //     super(props)
    // }

   
 componentDidMount(){
    
    React.axios.all([
        React.axios({url:'api/goods/banner',params:{_page:1,_limit:3}}),
    React.axios({url:'api/goods/home',params:{_page:1,_limit:10}})
    ]).then(
        React.axios.spread((bannar,home)=>{
            bannar.data.data.map(item => item.bannar=this.baseUrl + '/' + item.bannar);
            this.setState({
                bannar:bannar.data.data,
                home:home.data.data
            })
        })
    )
   
    }
   
    render(){
        console.log(this.state.home)
        let {bannar,home} = this.state
        return(
            <div className='Home'>
                <ViSwiper
               data={bannar}
                to={{pathname:'/detail',apiname:'banner'}}
                />
               {/* {
                   home.map((item,index)=>(
                       <Cell
                       key={item._id}
                       index={index}
                       data={item}
                       to={{pathname:'/detail',apiname:'home'}}
                       >
                           <UcButton style={{float:'right'}} size="mini">+</UcButton>
                       </Cell>
                   ))
               } */}
            </div>
        )
    }
}
