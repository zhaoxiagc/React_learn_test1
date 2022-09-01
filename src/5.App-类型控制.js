//样式控制
/* 
1. 行内样式 —— 在元素身上绑定一个 style 属性即可
2. 类名样式 —— 在元素身上绑定一个 className 属性即可
*/


//动态类名控制

import './app.css'

const style = {
    color:"red",
    fontSize:"20px"
}

//动态控制一下这个 active 类名，满足条件才有

const activeFlag = true;

function App() {
    return (
        <div className="App">
            <span style={{color: "red",fontSize: "3px"}}>this is span</span>
            <span style={style}>this is span</span>
            <span className='active'>this is span</span>
            <span className={activeFlag ? 'active1' : ''}>测试类名样式</span>
        </div>
    )
}

export default App;