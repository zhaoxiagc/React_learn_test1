//hooks

/* 
useContext
    实现步骤：
    1. 使用 createContext 创建 Context 对象
    2. 在顶层组件通过 Provider 提供数据
    3. 在底层组件通过 useContext 函数获取数据

    注意：
        context 如果要传递的数据，只需要在整个应用初始化的时候传递一次就可以
        就可以选择在当前文件里做数据提供（例如index.js中，相当于一个静态数据）
        如果 context 需要传递数据，且需要对数据做修改，底层组件也需要跟着一起变，就写到 app.js 里边
*/

import React, { createContext, useContext, useState } from "react";

const Context = createContext()

function ComA(){
    const count = useContext(Context)
    return (
        <div>this is ComA
            <br/>
            app 传过来的数据为：{count}
            <ComC/>
        </div>
    )
}
function ComC(){
    const count  = useContext(Context)
    return (
        <div>this is ComC
            <br/>
            app 传过来的数据为：{count}
        </div>
    )
}

//App 组件
function App(){
    const [count, setCount] = useState(()=>{return 100});
    return (
        <Context.Provider value={count}>
            <div>
                <ComA/>
                <button onClick={()=>{setCount(count + 1)}}>click</button>
            </div>
        </Context.Provider>
    )
}

export default App;