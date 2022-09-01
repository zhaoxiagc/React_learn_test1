//react 组件进阶
/* 
children 属性：
    表示该组件的子节点，只要组件内部有子节点，props 中就有该属性
    children 可以是什么：
        1. 普通文本
        2. 普通标签元素
        3. 函数
        4. JSX

    注意，如果写了多个子节点，则会以一个 children 数组进行保存，可以按照数组的取值方法来读取
*/

import React from "react";

function ListItem ({children}){
    children[2]();
    return (
        <>
            <div>ListItem,{children[0]}</div>
            <div>ListItem,{children[1]}</div>
        </>
    )
}

class App extends React.Component{

    render (){
        return (
            <div>
                <ListItem>
                    组件的子节点 children 可以是普通文本
                    <div>组件的子节点 children 可以是标签元素</div>
                    {() => console.log(123)}
                </ListItem>
            </div>
        )
    }
}

export default App;