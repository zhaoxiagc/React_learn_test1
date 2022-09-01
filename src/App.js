
import React from "react";

class Counter extends React.Component{
    state = {
        count: 0,
        list: [1,2,3],
        person:{
            name:"jack",
            age:20
        }
    }

    clickHandler = () => {
        //数组修改
        this.setState({list: [...this.state.list, 4,5,6]})
    }

    render(){
        return(
            <>
            <ul>
                {this.state.list.map(item => <li key={item}>{item}</li>)}
            </ul>
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