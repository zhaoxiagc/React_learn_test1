//hooks
/*
useState 回调函数的参数：
    使用场景：
        参数只会在组件的初始渲染起作用，后续渲染时会被忽略，如果初始 state 需要通过计算才能获得
        则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

        const[name, setName] = useState(()=>{//编写计算逻辑，return '计算之后的初始值'})
    
    语法规则：
            1. 回调函数 return 出去的值将作为 name 的初始值
            2. 回调函数中的逻辑只会在组件化初始化的时候执行一次
    语法选择：
            1. 如果就是初始化一个普通的数据，直接使用 useState（普通数据）即可
            2. 如果要初始化的数据无法直接得到需要通过计算才能获取到，使用 useState（()=>{})
    
*/



//案例：如何实现一个自增按钮，可以由使用的时候以传参的方式决定递增的初始值
import React from "react";
import { useState } from "react";


function getDefaultValue(){
    for (let i=0;i<10000;i++){

    }
    return 10;
}

function Counter(props){
    const [count, setCount] = useState(()=>{
        //这里目的是为了体现初始值经过一定的计算
        //这个计算是比较广义的一个概念
        //只要无法直接确定，就要通过一定的操作才能获取，就可以理解为计算
        //循环遍历一万条数据才能确定这里的初始值是什么    return getDefaultValue()
        return props.count
    });
    return (
        <button onClick={()=>{setCount(count + 1)}}>{count}</button>
    )
}

//App 组件
function App(){
    
    return (
        <div>
            <Counter count = {10}/>
            <Counter count = {20}/>
        </div>
    )
}

export default App;