//hooks

/* 
类组件 如何发送网络请求？
    生命周期钩子函数 componentDIDMount
    执行时机？ 在初始化的时候 dom 渲染完毕时只执行一次


useEffect：
    1. 不加依赖项       -初始化、重新渲染
    2. []空数组作为依赖项  -初始化
    3. 加上特定的依赖项  -首次执行 + 任意一个变化执行
*/

/*
useEffect 发送网络请求
    使用场景：
        如何在 useEffect 中发送网络请求，并且封装同步 async await 操作
    语法要求：
        不可以直接在 useEffect 的回调函数外层直接包裹 await，因为异步会导致清理函数无法立即返回
    
    
*/

import React, { useEffect } from "react";


//App 组件
function App(){
    useEffect(()=>{
        //发送请求
        async function loadData(){
            // const res = await fetch('http://geek.itheima.net/v1_0/channels')
            // console.log(res);
            fetch('http://geek.itheima.net/v1_0/channels').then(
                response => response.json()
            ).then(data => console.log(data))
        }
        loadData()
    },[])
    return (
        <div>
        </div>
    )
}

export default App;