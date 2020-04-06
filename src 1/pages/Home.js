import React,{Component} from 'react'

import Cell from '../components/cell'
import UcButton from '../components/v-button'
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

    show=()=>{
        alert(hanhan)
    }
    async componentDidMount(){
        //这是实际接口
        let res = await this.axios({url:'/api/goods/home',params:{_page:1,_limit:10}})
        //这是假的数据利用mock
        let res2 = await this.axios({url:'mock/home',params:{_page:1,_limit:10}})
    }
    render(){
        return(
            <div className='Home'>
                <ViSwiper
                data={[
                    {_id:'1',title:'hanhan',sub_title:'wanjunkai',bannar:'/images/img_1.jpg'},
                    {_id:'2',title:'wanwan',sub_title:'hanqiao',bannar:'/images/img_1.jpg'}
                ]}
                to={{pathname:'/detail',apiname:'banner'}}
                />
                <Cell
                    index={0}
                    data={{
                        _id:'1',title:'hanhan',des:'youxianyinyun'
                    }}
                    to={{pathname:'/detail',apiname:'hoem'}}
                >
                 <UcButton style={{float:'right'}} size='mini' clickHander={this.show}>+</UcButton>   
            </Cell>
            <Cell
          data={{_id:"1",title:'asdfsdf',des:'是打发打发的'}}
        >
          <button style={{float:'right'}}>按钮</button>
        </Cell>
            </div>
        )
    }
}
