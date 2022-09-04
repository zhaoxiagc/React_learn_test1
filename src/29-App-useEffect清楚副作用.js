//hooks
/*
useEffect 清理副作用
    使用场景： 在组件被销毁时，如果有些副作用操作需要被清理，就可以使用次语法，比如常见的定时器   
*/

import React, { useEffect } from "react";
import { useState } from "react";

function Test(){
    useEffect(()=>{
        let timer = setInterval(()=>{
            console.log('定时器执行了！');
        },1000)
        return ()=>{
            //清理定时器
            clearInterval(timer)
        }
    },[])

    return (
        <div>Test</div>
    )
}

//App 组件
function App(){
    const [flag, setFlag] = useState(true)
    return (
        <div>
            {flag ? <Test/> : null}
            <button onClick={()=>{setFlag(!flag)}}>switch</button>
        </div>
    )
}

export default App;