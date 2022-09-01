//React 的状态不可变
//不要直接修改状态的值，而是基于当前状态创建新的状态值
import React from "react";

class Counter extends React.Component{
    //定义组件状态
    state = {
        count: 0,
        list: [1,2,3],
        person:{
            name:"jack",
            age:20
        }
    }

    clickHandler = () => {
        //注意：修改状态可以分开写，也可以一起写
        //数组修改
        this.setState({list: [...this.state.list, 4,5,6]})

        //对象修改
        this.setState({person: {...this.state.person, name: "lucy"}})


        //删除 - filter 过滤器
        this.setState({
            list: this.state.list.filter(item => item !== 2)
        })
    }

    render(){
        return(
            <>
            <ul>
                {this.state.list.map(item => <li key={item}>{item}</li>)}
            </ul>
            <div>{this.state.person.name}</div>
            <div>{this.state.count}<button onClick={this.clickHandler}>change list</button></div>
            </>
        )
    }
}

//根组件
function App() {
    return (
        <div>
           <Counter/>
        </div>
    )
}

export default App;