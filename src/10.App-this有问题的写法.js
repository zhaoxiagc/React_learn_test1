//this 有问题的写法

//注意：以下两种写法了解即可，实际开发中不使用


import React from "react";
class Test extends React.Component{
    constructor(){
        super();
        //1. this 的解决办法一
        //使用 bind 强行修正 this 指向
        //相当于在类组件初始化阶段，就可以把回调函数的 this 修正到
        //永远指向当前组件的实例对象
        // this.handler = this.handler.bind(this);
    }
    handler (){
        console.log(this);
    }
    render(){
        return (
            // <button onClick={this.handler}>click</button>

            //render 函数中的 this 已经被 react 内部做了修正
            //这里的 this 就是指向当前的组件实例对象
            //那我们箭头函数中的 this 直接沿用，所以也是指向当前的组件实例对象
            console.log("父函数中的 this 指向为", this),
            //2. this 的解决办法二
            //事件回调写成箭头函数的形式
            //如果不通过 constructor 做修正，直接可以在事件绑定的位置
            //通过箭头函数的写法，直接沿用父组件中的 this 指向，即为 render函数 的 this，也即当前的组件实例对象
            <button onClick={() => this.handler()}>click</button>
        )
    }
}

//根组件
function App() {
    return (
        <div>
            <Test/>
        </div>
    )
}

export default App;