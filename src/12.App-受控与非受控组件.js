/* 
表单处理：
    1. 受控组件（推荐使用）
    2. 非受控组件（了解）

    ***受控组件：
        受控组件就是可以被 react 的状态控制的组件
        例如：input 框自己的状态(input 的状态为 value)被 react 组件状态(react 的状态为 state)控制

        实现步骤：
            以获取文本框的值为例，受控组件的使用步骤如下：
            1. 在组件的 state 中声明一个组件的状态数据
            2. 将状态数据设置为 input 标签元素的 value 属性的值
            3. 为 input 添加 change 属性
            4. 在事件处理程序中，通过事件对象 e 获取到当前文本框的值（即用户当前输入的值）
            5. 调用 setState 方法，将文本框的值作为 state 状态的最新值
*/
import React, {createRef} from "react";

class Counter extends React.Component {
    //1. 声明一个用来控制 input value 的 react 组件自己的状态
    state = {
        message: "this is message"
    }


    //回调函数
    //4. 拿到输入的值，并利用 setState 保存到 message
    inputChange = (e) => this.setState({message: e.target.value});


    //产出 UI 模板结构
    render (){
        return (
            //2. 给 input 框的 value 属性绑定 react state
            //3. 给 input 绑定一个 onChange 事件，为了拿到当前输入框输入的数据
            <input type="text" value={this.state.message} onChange={this.inputChange}/>
        )
    }
}

class Test extends React.Component{
    state = {
        input:"hello, test!"
    }
    render (){
        return (
            <input type="text" value={this.state.input} onChange={e => {this.setState({input: e.target.value})}}/>
        )
    }
}




/* 
    ***非受控组件：
        非受控组件就是通过手动操作 dom 的方式获取文本框的值，文本框的状态不受 react 组件的 state 中的状态的控制
        直接通过原生 dom 获取输入框的值
        
        实现步骤：
            1. 导入 createRef 函数
            2. 调用 createRef 函数，创建一个 ref 对象，存储到名为 msgRef 的实例属性中
            3. 为 input 添加 ref 属性，值为 msgRef
            4. 在按钮的事件处理程序中，通过 msgRef.current 即可拿到 input 对应的 dom 元素，而其中
            msgRef.current.value 拿到的就是文本框的值
*/

class Input extends React.Component {
    //1. 这个实例属性是可以自定义的，语义化即可
    msgRef = createRef();

    getValue = () =>{
        console.log(this.msgRef.current.value);
    }
    render (){
        return (
            <>
                <input type="text" ref = {this.msgRef}/>
                <button onClick={this.getValue}>点击获取输入框的值</button>
            </>
        )
    }
}

//根组件
function App() {
    return (
        <div>
            <Counter/>
            <Test/>
            <Input/>
        </div>
    )
}

export default App;