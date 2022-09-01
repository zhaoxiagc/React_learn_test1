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
父传子实现：
    1. 父组件提供传递的数据 state
    2. 给子组件标签添加属性，值为 state 中的数据
    3. 子组件中通过 props 接受父组件中传递过来的数据
        1. 类组件使用 this.props 获取 props 对象
        2. 函数组件直接通过参数获取 props 对象


props 说明：
1. props 是只读对象（readonly)
    根据“单向数据流”的要求，子组件只能读取 props 中的数据，不能进行修改
2. props 可以传递任意数据
    数字、字符串、布尔值、数组、对象、*函数、*JSX
*/


import React from "react";

//App 是父组件（类组件）
//Son 是子组件
function SonF (props){
    //props 是一个对象，里边存着通过父组件传入的所有数据
    console.log(props);
    return (
        <>
            <div>我是函数子组件SonF，收到了消息{props.message}</div>
            <div>数组{props.list}
                <ul>{props.list.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>对象属性{props.person.name}</div>
            <button onClick={props.getMsg}>这里有一个从父组件传递进来的函数,点击进行触发</button>
            {props.child}
        </>
    )
}


class SonC extends React.Component{
    render (){
        console.log(this.props);
        return (
            //类组件必须通过 this.props 来获取父组件传递进来的参数
            <>
                <div>我是一个类子组件SonC，收到了消息{this.props.message}</div>
                <div>数组{this.props.list}
                    <ul>{this.props.list.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>对象属性{this.props.person.name}</div>
                <button onClick={this.props.getMsg}>这里有一个从父组件传递进来的函数,点击进行触发</button>
                {this.props.child}
            </>
        )
    }
}

//由于 props 和 this.props 再 . 对应的数据，较为繁琐
//所以我们在子组件中常用解构赋值的方式来获取父组件传入的数据
//以下两个函数组件用类帮助理解数据的解构赋值
function SonF1 (props){
    //props 是一个对象，里边存着通过父组件传入的所有数据
    const {message, list, person, getMsg, child} = props
    return (
        <>
            <div>我是函数子组件SonF1，收到了消息{message}</div>
            <div>数组{list}
                <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>对象属性{person.name}</div>
            <button onClick={getMsg}>这里有一个从父组件传递进来的函数,点击进行触发</button>
            {child}
        </>
    )
}

function SonF2 ({message, list, person, getMsg, child}){
    //props 是一个对象，里边存着通过父组件传入的所有数据
    return (
        <>
            <div>我是函数子组件SonF1，收到了消息{message}</div>
            <div>数组{list}
                <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>对象属性{person.name}</div>
            <button onClick={getMsg}>这里有一个从父组件传递进来的函数,点击进行触发</button>
            {child}
        </>
    )
}

//这里写的就是原生的函数语法，props 也是一个普通的 js 对象
//所以原生支持的写法，这里都是可以的，放心大胆地写即可


class App extends React.Component{
    //准备数据
    state = {
        message: "hello, this is message",
        list: [1,2,3,4,5],
        person: {
            name:"jack",
            age: 23
        }
    }
    getMsg = () => {
        console.log("我是父组件中定义的函数");
    }
    render (){
        return (
            <>
            {/* 往子组件身上绑定属性，但是要保持语义化 */}
                <SonF 
                    message={this.state.message}
                    list={this.state.list}
                    person={this.state.person}
                    getMsg={this.getMsg}
                    child={<span>this is span</span>}

                />   {/* 渲染函数子组件 */}
                <SonC 
                    message={this.state.message}
                    list={this.state.list}
                    person={this.state.person}
                    getMsg={this.getMsg}
                    child={<span>this is span</span>}
                />   {/* 渲染类子组件 */}
                <SonF1
                    message={this.state.message}
                    list={this.state.list}
                    person={this.state.person}
                    getMsg={this.getMsg}
                    child={<span>this is span</span>}

                />   {/* 渲染函数子组件 */}
                <SonF2
                    message={this.state.message}
                    list={this.state.list}
                    person={this.state.person}
                    getMsg={this.getMsg}
                    child={<span>this is span</span>}

                />   {/* 渲染函数子组件 */}
            </>
        )
    }
}

export default App;