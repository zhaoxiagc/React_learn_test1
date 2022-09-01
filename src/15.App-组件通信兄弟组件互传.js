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


/* 
兄弟之间的通信：
    实现兄弟组件之间的通信
    核心思路：通过状态提升机制，利用共同的父组件实现兄弟组件之间的通信

*/

//目标： B组件中的数据传递给A
//技术方案：
    //1. 先把 B 中的数据通过子传父传给 App
    //2. 然后通过父传子将 App 中的数据传递给 A

import React from "react";

function SonA (props){
    return (
        <div>this is A,{props.sendAMsg}</div>
    )
}


function SonB (props){
    const bMsg = "这里是来自 B 组件中的数据"
    return (
        <div>this is B<button onClick={() => props.getMsg(bMsg)}>发送数据</button></div>
    )
}

class App extends React.Component{
    state = {
        sendAMsg:"测试一下父传子初始值"
    }
    //声明一个传递给 B 组件的方法
    getMsg = (msg) => {
        console.log(msg)
        //把 msg 数据交给 sendAMsg
        this.setState({
            sendAMsg: msg
        })
    }
    render (){
        return (
           <div>
                <SonA sendAMsg={this.state.sendAMsg}/>
                <SonB getMsg={this.getMsg}/>
           </div>
        )
    }
}

export default App;