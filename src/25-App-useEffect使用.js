//hooks
/*
useEffect:
1. 理解函数副作用：
    什么是副作用：
        副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于 React 组件来说，主作用是根据数据渲染 UI，除此之外的都是副作用
    常见的副作用：
        1. 数据请求 ajax 发送
        2. 手动修改 dom
        3. localstorage 操作
        
    useEffect 函数的作用就是为 react 函数组件提供副作用处理的！

2. 基础使用
    为 react 函数组件提供副作用处理
    使用步骤：
    1. 导入 useEffect 函数
    2. 调用 useEffect 函数，并传入回调函数
    3. 在回调函数中编写副作用处理（dom 操作）
    4. 修改数据状态，当我们通过修改状态更新组件时，副作用也会不断执行
    5. 检测副作用是否生效

3. 依赖项控制副作用的执行实际
    1. 默认状态（无依赖项）
        组件初始化的时候先执行一次，等到每次数据修改的时候再次执行
    2. 添加空数组作为依赖项
        组件只在首次渲染（初始化）时执行一次
    3. 添加特定的依赖
        副作用函数在首次渲染时执行，在依赖项发生变化时重新执行
    4. 注意事项
        只要在 useEffect 回调函数中用到的数据状态就应该出现在依赖项数组中声明，否则可能会有 bug
        某种意义上，hook 的出现，就是想不用生命周期的概念也可以写业务逻辑
*/


import { func } from "prop-types";
import React from "react";
import { useState } from "react";


/* //副作用
let count = 0;
function getNum(a,b){
    count ++;    //加了这行语句之后，该函数就不再是一个纯函数，函数除了做自己的工作之外，还影响到了外部的变量，这就是一个副作用
    return a+b;
} */



//在修改数据之后，把 count 值放到页面标题中
//1. 导入 useEffect 函数
import { useEffect } from "react";

//App 组件
function App(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('zhaoxia');
    useEffect(()=>{
        //定义副作用
        console.log('副作用又执行了！');
        document.title = count
        console.log(name);
    }, [count, name])   //此时什么时候会执行副作用函数呢? 初始化 + count/name 被修改时都会执行

    return (
        <div>
            <button onClick={()=>setCount (count + 1)}>{count}</button>
            <button onClick={()=>setName ('gaochao')}>{name}</button>
        </div>
    )
}

export default App;