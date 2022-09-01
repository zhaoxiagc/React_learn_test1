//react 组件进阶
/* 
props 校验默认值，给组件的 props 定义默认值
*/

import React from "react";

//里边有各种各样的内置校验规则
//函数组件默认值为 1. 使用 defaultProps 规定； 2. 使用函数参数进行传递（推荐的方案）
//区别：第一种在使用的时候内部就已经有了 pageSize 这个prop，第二种只有传递的时候组件内部才有这个 prop
import ProtoTypes from 'prop-types'


//1. 函数组件设置 props 默认值
function Test ({number=20, pageSize}){    //函数组件的第二种写法
    return (
        <div>
            this is test
            <br/>
            {number}
            <br/>
            {pageSize}
        </div>
    )
}

Test.protoTypes = {
    //定义各种规则
    list: ProtoTypes.array.isRequired   //限定这里的 list 参数的类型必须是数组类型
}

//函数组件默认参数的第一种写法
Test.defaultProps = {
    pageSize: 10        //如果给我传递 pageSize，就以传递的为准，如果不传，就以默认值为准
}




//2. 类组件设置 props 默认值: 1. 使用 defaultProps 规定； 2. static 类静态属性
class Test1  extends React.Component {
    static defaultProps = {
        age: 23
    }
    render(){
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.age}</div>
            </div>
        )
    }
}

//类组件默认参数的第一种写法
Test1.defaultProps = {
    name:"zhaoxia"
}



//App 组件
class App extends React.Component{

    render (){
        return (
            <div>
                <Test/>
                <Test pageSize={18}/>
                <Test1 name="gaochao"/>
            </div>
        )
    }
}

export default App;