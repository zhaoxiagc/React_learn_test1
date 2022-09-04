//hooks
/*
阶段练习：
    自定义一个 hook 函数，实现 localStorage
*/


import React from "react";
import {useWindowScroll} from './hooks/useWindowScroll'
import {useLocalStorage} from './hooks/useLocalStorage'


//App 组件
function App(){
    const [y] = useWindowScroll();
    const [message, setMessage] = useLocalStorage('hook-key', '阿菲')
    setTimeout(()=>{
        setMessage('cp')
    },5000)
    return (
        <div style={{height: '12000px'}}>
            {y}
            {message}
        </div>
    )
}

export default App;