//React 组件通信
/* 
目标：为什么要了解组件通信？
    1. 组件是独立封闭的单元，默认情况下组件只能使用自己的数据（state）
    2. 组件化开发的过程中，完整的功能会拆分多个组件，在这个过程中不可避免的需要互相传递一些数据
    3. 为了能让各组件之间可以进行互相沟通，数据传递，这个过程就是组件通信
        父子关系：最重要的
        兄弟关系：自定义事件模式产生技术方法 eventBus / 通过共同的父组件通信
        其他关系：mobx/redux/基于 hook 的方案
*/


/* 
Context 实现跨组件传递数据：
    实现步骤：
    1. 创建 Context 对象，导出 Provider 和 Consumer 对象
        const {Provider, Consumer} = createContext()
    2. 使用 Provider 包裹根组件提供数据
        <Provider value={this.state.message}>
            // 根组件
        </Provider>
    3. 需要用到数据的组件使用 Consumer 包裹获取数据
    <Consumer >
        {value => 基于 context 值进行渲染}
    </Consumer>
*/



//App -> A -> C
//App 数据  -> C
//注意事项：
    //1. 上层组件和下层组件关系是相对的，只要存在就可以使用，通常都会通过 app 作为数据提供方
    //2. 这里涉及到的语法都是固定的，有两处：提供的位置 value 提供数据，获取的位置 {value => 使用 value 做什么都可以}


//1. 引入 createContext 方法并执行，结构提供者和消费者
import React, {createContext} from "react";
const {Provider, Consumer} = createContext();

function A (props){
    return (
        <div>
            this is comA
            <C/>
        </div>
    )
}

function C (props){
    return (
        <div>
            this is comC
            {/* 3. 通过 Consumer 使用数据 */}
            <Consumer>
                {value => <span>{value}</span>}
            </Consumer>
        </div>
    )
}

class App extends React.Component{
    state = {
        massage:"hello!"
    }
    render (){
        return (
            //2. 使用 Provider 包裹根组件
            <Provider value={this.state.massage}>
                <div>
                    <A/>
                </div>
            </Provider>
           
        )
    }
}

export default App;