//hooks

/* 
useRef
    使用场景：在函数组件中获取真实的 dom 元素对象或者是组件对象
    使用步骤：
        1. 导入 useRef
        2. 执行 useRef 函数并传入 null，返回值为一个对象，内部有一个 current 属性存放拿到的 dom 对象（组件实例）
        3. 通过 ref 绑定要获取的元素或者组件
*/

import React, { useEffect, useRef } from "react";


//组件实例： 类组件
//dom 对象：标签

class TestC extends React.Component{
    render (){
        return(
            <div>
                我是类组件
            </div>
        )
    }
}

//App 组件
function App(){
    const testRef = useRef(null)
    const h1Ref = useRef(null)

    useEffect(()=>{
        console.log(testRef.current)
        console.log(h1Ref.current)    //真实的 dom
    },[])
    //useEffect 回调，是在 dom 渲染之后还是之前？
    //答：之后！！
    //和 VUE 里面的 watch 效果比较像，但是执行时机是不同的

    return (
        <div>
            <TestC ref={testRef}/>
            <h1 ref={h1Ref}>this is h1</h1>
        </div>
    )
}

export default App;