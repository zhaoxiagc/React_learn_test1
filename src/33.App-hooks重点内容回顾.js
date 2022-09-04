//hooks 重点内容回顾

/* 
一、hooks 介绍
    概念：一套能够使函数组件更强大，更灵活的“钩子”
    优势：
        告别难以理解的 class
        解决业务逻辑难以拆分的问题
        方便状态逻辑复用
        更符合 UI = F（data) 的设计哲学
    注意点：
        hooks 和 class 写法共存
        hooks 只能在函数组件中使用
二、useState
    作用：为函数组件提供数据状态（state）
    语法：
        const [count, setCount] = useState(0)
        count: 数据状态
        setCount：修改数据的对应方法
    重点注意：
        1. useState 的初始参数只会在组件首次渲染的时候使用，再次更新时会被忽略
        2. 每次通过 setCount 修改状态时都会引起组建的重新渲染
        3. useState 可以调用多次，每次都是独立的
        4. useState 不可以在除了函数组件之外的地方，比如分支语句、循环语句、内部函数中执行
        5. 如果初始值需要计算才能得到可以使用回调函数的写法来确定 useState 的初始值
三、useEffect
    作用：为 react 组件提供副作用处理
    什么是副作用：函数组件的主要作用就是通过数据渲染 UI，除了这个之外的操作就是副作用
        1. ajax 请求
        2. 手动修改 dom
        3. localStorage 操作
    依赖项控制执行时机：
        1. 默认状态，首次执行 + 每次组件更新时执行
        2. 添加 []，首次执行
        3. 添加特定依赖项[count]-首次执行+依赖项变化时执行
    清理副作用：
        useEffect(()=>{
            return () =>{
                //清理副作用
            }
        })
    都是在组件 dom 渲染更新完毕之后才执行的
四、useRef
    作用：获取真实 dom 或组件实例对象
    实现步骤：
        1. 导入 useRef 函数
        2. 执行 useRef 函数并传入 null，返回值为一个对象，内部有一个 current 属性存放拿到的 dom对象（组件实例）
        3. 通过 ref 绑定要获取的元素或组件
五、useContext
    作用：在 hooks 下如何跨组件传数据
    实现步骤：
        1. 使用 createContext 创建 Context 对象
        2. 在顶层组件通过 Provider 提供数据（可以在 index.js 和 app.js 数据中）
        3. 在顶层组件通过 useContext 函数获取数据
    补充：
        1. 如果提供的数据是静态不变 - index.js 包裹
        2. 如果提供过的数据需要变化 - app.js 可以方便更改数据
        

*/

import React, { createContext, useContext, useState } from "react";

//App 组件
function App(){
    const [count, setCount] = useState(()=>{return 100});
    return (
        <div>

        </div>
    )
}

export default App;