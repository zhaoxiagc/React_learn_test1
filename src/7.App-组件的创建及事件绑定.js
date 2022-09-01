//一、函数组件的创建和渲染

import React from "react";

/* 
1. 组件的名称首字母必须大写
2. 函数组件必须要有返回值，表示该组件的 UI 结构，如果不需要渲染任何内容，则返回 null
3. 组件就像 HTML 标签一样可以被渲染到页面中，组件表示的是一段结构内容，对于函数组件来说，渲染的内容
是函数的返回值就是对应的内容
4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合
*/
function Hello() {
    const clickHandle = (e) => {
        //阻止事件的默认行为，下面的超链接点击的时候会发生跳转，但是取消默认事件以后，就不会再发生跳转，经常使用事件对象 e 进行该操作
        e.preventDefault();
        alert("函数组件中的点击函数被触发了！");
        console.log(e);
    }
    return (
        <div onClick={clickHandle}><a href="http://baidu.com">尝试点击这个文字，观察一下会发生什么？</a></div>
    )
}



//二、类组件的创建和渲染
/* 
1. 首字母必须大写，驼峰命名法
2. 类组件应该继承 React.Component 父类，从而使用父类中提供的方法和属性
3. 类组件必须提供 render 方法，render 方法必须要有返回值，表示该组件的 UI 结构
*/
class HelloComponent extends React.Component{
    //事件回调函数（标准写法：避免 this 指向问题）
    //这样写回调函数中的 this 指向的是当前的组件实例对象
    clickHandle = () =>{
        alert("类组件中的点击函数被触发了！")
    }
    render() {
        return <div onClick={this.clickHandle}>this is a class component</div>
    }
}


//事件绑定传递额外参数
function Meet(){
    //注意：如果只需要一个额外参数，只需要将绑定的地方写成箭头函数的形式，并且传递一个自定义的参数
    //如果需要事件对象 e 和额外参数，需要传递两个参数
    const meet = (e,msg) =>{
        console.log("见到你很开心！我们可以成为好朋友！",e,msg);
    }
    return(<div onClick={(e) => meet(e,"this is message")}>见到你很开心，我觉得是一件非常非常快乐的事情！</div>)
}




//渲染
function App() {
    return (
        <div>
            <Hello></Hello>
            <Hello/>
            <HelloComponent></HelloComponent>
            <HelloComponent/>
            <Meet/>
        </div>
    )
}

export default App;