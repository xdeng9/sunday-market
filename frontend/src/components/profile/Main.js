import React, { Component } from 'react';
import './main_style.css'
import ProItem from './ProItem'

const data =[
    {id:1},{id:2},{id:3},{id:4}
]

const tabTitle = ['All Items','Unavailable','avaialable','Upload Items']

class Main extends Component {
    constructor(props){
        super(props);
        this.state={currentTab: 0}
    }
    renderProItemList =data=>{
        return data.map(item=>{
            return (
                <ProItem key={item.id} data={item}/>
            )
        })
    }

    renderEmpty = ()=>{
        return (
            <div className='userMain_empty'> 
                <div className = 'userMain_emptyIcon'></div>
                <div className = 'userMain_emptyText'>
                    No Item Yet,add some if you want to 
                </div>
            </div>
        )
    }

    handleClickTab =(index)=>{
        this.setState(
            {currentTab: index}
        )
        if (index === 3){
            console.log('hello');
        }
    }

    render() {
        const currentTab = this.props.currentTab
        return (
            <div className='userMain'>
                <div className='userMain_menu'>
                    {tabTitle.map((item,index)=>{
                        return(
                            <div key={index} className='userMain_tab'
                                onClick={this.handleClickTab.bind(this, index)}>
                                <span className={
                                currentTab === index ?
                                'userMain_title_active'
                                : 'userMain_title'
                                }>{item}</span>
                            </div>
                                )
                            })
                    }
                </div>

                <div className='userMain_content'>
                    {data&&data.length>0? this.renderProItemList(data):
                    this.renderEmpty()}
                </div>
            </div>
        );
    }
}

export default Main;