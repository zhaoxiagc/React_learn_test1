//JSX 条件渲染
//技术方案：三元表达式（常用）、逻辑&&运算

//1.三元表达式——满足条件才渲染一个 span 标签
//2.逻辑&&运算
const flag = true;

function App() {
    return (
        <div className="App">
            {flag ? (
                <div>
                    <span>this is a span</span>
                </div>) : null}

            {false && <span>this is a span</span>}
        </div>
    )
}

export default App;