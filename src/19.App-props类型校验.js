//react 组件进阶
/* 
实现步骤：
    1. 安装属性校验包：yarn add prop-types
    2. 导入 prop-types
    3. 使用 组件名.propTypes = {} 给组件添加校验规则

规则说明：
    四种常见的结构:
    1. 常见类型：array,bool,func,number,object,string
    2. React 元素类型
    3. 必填项: isRequired
    4. 特定的结构对象: shape({})
*/

import React from "react";

//里边有各种各样的内置校验规则
import ProtoTypes from 'prop-types'

function Test ({list}){
    return (
        <div>
            {list.map(item => <p key={item}>{item}</p>)}
        </div>
    )
}

Test.protoTypes = {
    //定义各种规则
    list: ProtoTypes.array.isRequired   //限定这里的 list 参数的类型必须是数组类型
}

class App extends React.Component{

    render (){
        return (
            <div>
                <Test/>
            </div>
        )
    }
}

export default App;