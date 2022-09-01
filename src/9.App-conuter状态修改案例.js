//通过类组件修改状态的方式 counter
import React from "react";

class Counter extends React.Component{
    //定义组件状态
    state={count:0};

    //事件回调函数
    changeCount = () => {
        this.setState({count: this.state.count +1})
    }

    render(){
        return (
            <button onClick={this.changeCount}>{this.state.count}</button>
        )
    }
}

function App() {
    return (
        <div>
            <Counter/>
        </div>
    )
}

export default App;