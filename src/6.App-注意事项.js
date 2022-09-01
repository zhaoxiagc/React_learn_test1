//JSX 中的注意事项
/* 
1. 必须有一个根节点，如果没有根节点，可以使用<></>（幽灵节点）替代
2. 所有标签都是闭合或者自闭合的
3. JSX 的语法更贴近 JS 语法，属性名采用驼峰命名法，class -> className     for -> htmlFor
4. JSX 支持多行/换行，如果换行比较多，建议采用（）包起来，防止 bug 出现
*/

function App() {
    return (
        <>
            <div></div>
            <div></div>
        </>
    )
}

export default App;