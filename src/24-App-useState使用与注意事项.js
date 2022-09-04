//hooks
/*
一、useState 基础使用
    1. 作用
        为函数组件提供状态（state）
    2. 使用步骤：
        1. 导入 useState 函数
        2. 调用 useState 函数，并传入状态的初始值，必须在函数组件中
        3. 从 useState 函数的返回值中，拿到状态和修改状态的方法（解构出来 [数据，修改数据的方法] ）
        4. 在 JSX 中展示状态（使用数据）
        5. 调用修改状态的方法更新状态（修改数据）

二、useState 状态读取和修改
    const [count, setCount] = useState(0)
    1. useState 传过来的参数作为 count 的初始值
    2. [count, setCount] 这里的的写法是一个解构赋值， useState 的返回值是一个数组
        名字可以自定义吗？ -> 可以自定义，保持语义化就行
        顺序可以换吗？ -> 不可以的   第一个参数就是数据状态，第二个参数就是修改数据的方法
    3. setCount 函数   作用用来修改 count 依旧保持不能直接修改原值，而是生成一个新的值替换原值
        setState (基于原值计算得到的新值)
    4. count 和 setCount 是绑在一起的，setCount 只能用来修改对应的 count 的值

三、组件的更新
    当我们调用 setCount 的时候，更新过程
    1. 首次渲染：
        首次渲染的时候，组件内部的代码会被执行一次，
        其中 useState 也会跟着执行，这里重点注意：初始值只在首次渲染的时候生效
    2. 更新渲染：
        setCount 都会更新
        1. app 组件会再次渲染，这个函数会再次执行
        2. useState 再次执行，得到的新的 count 值不是0 ，而是修改之后的 1，模板会用新值渲染


    重点一句话：useState 初始值只在首次渲染生效，后续只要调用 setCount 整个 app 中代码都会执行
    此时的 count 每次拿到的都是最新值

四、使用规则
    1. useState 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态
    2. useState 注意事项：
        1. 只能出现在函数组件中
        2. 不能嵌套在 if/for/其他函数中（react 按照 hooks 的调用顺序识别每一个 hook）
*/

import React from "react";
import { useState } from "react";



//App 组件
function App(){
    //count： 数据状态
    //setState： 修改 count 的函数（专有函数）
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(true);
    const [list, setList] = useState([]);
    console.log(count);
    function test(){
        setCount(count +1);
        setFlag(false);
        setList([1,2,3])
    }
    return (
        <div>
            count: {count}
            flag: {flag?'1':'0'}
            list: {list.join('-')}
            <button onClick={test}>+</button>
        </div>
    )
}

export default App;