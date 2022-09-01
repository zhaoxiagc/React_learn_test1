/* 
总结：
1. 编写组件其实就是编写原生 js 或者函数
2. 定义状态必须通过 state 实例属性的方式，提供一个对象，名称是固定的，就叫做 state
3. 修改 state 中的任何属性，都不可以通过直接赋值，必须用 setState 方法，这个方法来自于继承得到
4. 这里的 this 关键词很容易出现指向错误的问题，下面的写法是最推荐的，没有 this 指向问题
*/
import React from "react";

//组件状态
//注意：在 Hook 出现之前，函数组件是没有状态的，所以只能用在类组件中
class TestComponent extends React.Component{
    //1. 定义组件状态
    state = {
        //在这里可以定义各种属性，全都是当前组件的状态
        name: 'cp teacher'
    }
    //事件回调函数
    changeName = () => {
        //3. 修改 state 中的数据，注意，不可以直接做赋值修改，必须通过一个方法 setState
        this.setState  = ({
            name: this.state.name + 'brother'
        })
    }
    render(){
        //2. 使用状态
        return(
        <div>
            this is TestComponent
            当前的name为：{this.state.name}
            <button onClick={this.changeName}>修改文字</button>
        </div>
        )
    }
}

function App() {
    return (
        <div>
            <TestComponent/>
        </div>
    )
}

export default App;