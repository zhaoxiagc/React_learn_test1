//React 组件通信
/* 
目标：为什么要了解组件通信？
    1. 组件是独立封闭的单元，默认情况下组件只能使用自己的数据（state）
    2. 组件化开发的过程中，完整的功能会拆分多个组件，在这个过程中不可避免的需要互相传递一些数据
    3. 为了能让各组件之间可以进行互相沟通，数据传递，这个过程就是组件通信
        父子关系：最重要的
        兄弟关系：自定义事件模式产生技术方法 eventBus / 通过共同的父组件通信
        其他关系：mobx/redux/基于 hook 的方案
*/

import React from "react";


//该组件渲染列表
function ListItem ({item, delItem}){
    return (
        <>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.info}</p>
            <button onClick={() => delItem(item.id)}>删除</button>
        </>
    )
}


//该组件提供数据，渲染 ListItem 组件
//先不抽离组件，完成基础渲染之后再抽离组件
class App extends React.Component{
    state = {
        list: [
            {id: 1, name:"超级好吃的棒棒糖", price:18.8, info: "开业大吉"},
            {id: 2, name:"超级好吃的大鸡腿", price:30.4, info: "开业大吉"},
            {id: 3, name:"超级好吃的火龙果", price:9.2, info: "开业大吉"}
        ]
    }

    //给子组件传递的函数
    delItem = (id) => {
        this.setState({list: this.state.list.filter(item => item.id !== id)})
    }

    render (){
        return (
            <div>
                {this.state.list.map(item => (<ListItem item={item} key={item.id} delItem={this.delItem}/>))}
                
            </div>
        )
    }
}

export default App;