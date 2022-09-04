//生命周期
/* 
组件的生命周期是指组件从被创建到挂载到页面中运行起来，再到组件不用时卸载的过程
注意：只有类组件（实例化）才有生命周期，函数组件（不需要实例化）是没有生命周期的
    React 组件的生命周期主要分为三个阶段：
        1. 挂载阶段
            三个钩子函数：constructor、render、componentDidMount
            constructor  
                创建组件时，最先执行，初始化的时候只执行一次
                作用：1. 初始化 state,  2. 创建 Ref,  3. 使用 bind 解决 this 指向的问题
            render
                每次组件渲染都会触发
                作用：渲染 UI（注意：不能在里面调用 setState()）
            componentDidMount
                组件挂载（完成 DOM 渲染）后执行，初始化的时候只执行一次
                作用：1. 发送网络请求，2. DOM操作
        2. 更新阶段
            两个钩子函数：render、componentDidUpdate
            render
                每次组件渲染都会触发
                渲染 UI （与挂载阶段是同一个 render）
            componentDidUpdate
                组件更新后（DOM渲染完毕）
                作用：DOM 操作，可以获取到更新后的 DOM 内容，不要直接调用 setState
        3. 卸载阶段
            一个钩子函数：componentWillUnmount
            componentWillUnmount
                组件卸载（从页面中消失）
                执行清理工作（比如：清理定时器等）

        注意：执行顺序是固定的
*/

import React from "react";


class Text extends React.Component{
    //如果数据是组件的状态需要去影响视图，定义到 state 中
    //而如果我们需要的数据状态 不和视图绑定 定义成一个普通的实例属性就可以啦
    //state 中尽量保持精简
    timer = null
    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log('定时器开启');
        },1000)
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        //清理定时器
        clearInterval(this.timer)
    }
    render(){
        return (
            <div>test</div>
        )
    }
}


//App 组件
class App extends React.Component{
    constructor (){
        super()
        console.log('constructor');
    }
    state = {
        counter: 0,
        flag: true
    }
    changeHandler = () => {
        this.setState({counter: this.state.counter+1,flag: !this.state.flag})    //点击按钮的时候，App 组件更新，Test 组件销毁
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    

    render (){
        console.log('render');
        return (
            <div>
                this is div

                {/* 通过一个数据状态的切换，让 Test 组件进行销毁重建，就会发生组件卸载 */}
                {this.state.flag ? <Text/> : null }
                <button onClick={this.changeHandler}>{this.state.counter}</button>
            </div>
        )
    }
}

export default App;