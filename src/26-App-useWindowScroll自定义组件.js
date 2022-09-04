//hooks
/*
阶段练习：
    自定义一个 hook 函数，实现获取滚动距离 Y 
*/


import React from "react";
import {useWindowScroll} from '../src/hooks/useWindowScroll'


//App 组件
function App(){
    const [y] = useWindowScroll();
    return (
        <div style={{height: '12000px'}}>
            {y}
        </div>
    )
}

export default App;