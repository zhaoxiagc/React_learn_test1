//阶段性重点内容总结
/* 
Context 机制
    场景：跨组件通信，顶层组件向任意组价传递数据
    实现：
        1.调用 createContext 方法，得到 Provider 和 Consumer
        2.通过 Provider 包裹顶层组件 value 属性绑定数据
        3.通过 Consumer 包裹底层组件{value => 消费数据}

组件 children 属性
    概念：组件内部写的内容都会识别为 children 属性存入 props
    支持：文本、标签、JSX、函数……
    应用场景：render Props 和 高阶函数

props 校验：
    场景：在用户传入数据的时候提供类型校验（常见于组件库）
    如何实现：通过 props-types 官方工具包
    语法：组件名.propTypes = {定义规则}，例如：
        Test.protoTypes = {list: ProtoTypes.array.isRequired}

props 默认值：
    场景：如果传入就以传入的为主，如果不传就是用默认值
    函数组件-通过函数默认参数实现   function List({pageSize = 10})
    类组件-通过静态属性实现   static defaultProps = {pageSize：10}

生命周期：
    挂载阶段（按顺序执行一次）：constructor、render、componentMount
    更新阶段（只要组件更新就会执行）：render、componentUpdate
    卸载阶段（组件被销毁时执行一次）:componentWillUnmount

antDesign 组件库及使用
*/

import React from "react";



//App 组件
class App extends React.Component{

    render (){
        return (
            <div>
               
            </div>
        )
    }
}

export default App;