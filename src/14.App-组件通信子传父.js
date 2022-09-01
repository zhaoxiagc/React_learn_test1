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
App 是父组件（类组件）
Son 是子组件
父传子 props 函数
子传父： 子组件调用父组件传递过来的函数，并且把想要传递的数据当成是函数的实参传入即可
*/

import React from "react";

//最简单的实现
function Son1 (props){
    const {getSonMsg} =props;
    return (
        //2. 执行父组件传递过来的函数，并传递实参
        <div>this is son component<button onClick={() => getSonMsg("这里是来自于子组件中的数据，实现方法一最简单直观")}>click</button></div>
    )
}


//子组件自身定义一个函数
function Son2 (props){
    const sonMsg ="这里来自父组件的数据，一起看看！实现方法2更加清晰";
    function clickHandler (){
        props.getSonMsg(sonMsg)
    }
    return (
        //2. 执行父组件传递过来的函数，并传递实参
        <div>this is son component<button onClick={clickHandler}>click</button></div>
    )
}

class App extends React.Component{
    //准备数据
    state = {
        list: [1,2,3]
    }
    //1. 准备一个函数传给子组件
    getSonMsg = (sonMsg) => {
        console.log(sonMsg);
    }
    render (){
        return (
           <div>
                <Son1 getSonMsg={this.getSonMsg}/>
                <Son2 getSonMsg={this.getSonMsg}/>
           </div>
        )
    }
}

export default App;