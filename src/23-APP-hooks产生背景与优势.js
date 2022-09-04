//hooks
/*
什么是 hooks：
    hooks 的本质，一套能够使函数组件更强大，更灵活的“钩子”

React 体系里组件分为 类组件和函数组件
经过多年的实战，函数组件是一个更加匹配 React 的设计理念 UI = f(data)，也更有利于逻辑拆分与重用的组件表达形式，
而先进的函数组件是不可以有自己的状态的，为了能让函数组件可以拥有自己的状态，所以从 react v16.8 开始，Hooks 应运而生

注意点：
    1. 有了 hooks 之后，为了兼容老版本，class 类组件并没有被移除，俩者都可以使用
    2. 有了 hooks 之后，不能再把函数组件认为无状态的组件了，因为 hooks 维函数提供了组件
    3. hooks 只能在函数组件中使用

Hooks 解决了什么问题：
    hooks 的出现解决了两个问题：1. 组件的状态逻辑复用，2. class 组件自身的问题
    1. 组建的逻辑复用
    在 hooks 出现之前，react 先后尝试了 mixins 混入，HOC 高阶组件，render-props 等模式
    但是都有各自的问题，比如 mixin 的数据来源不清晰，高阶组件的嵌套问题等等
    2. class 组件自身的问题
    class 组件就像一个厚重的“战舰”一样，大而全，提供了很多东西，有不可忽略的学习成本，比如各种生命周期，
    this 指向等问题，而我们更多时候需要的是一个轻快灵活的“快艇”

Hooks 的优势总结：
    1，告别难以理解的 class
    2. 解决业务逻辑难以拆分的问题
    3. 使状态逻辑复用变得简单可行
    4. 函数组件在设计思想上，更加契合 React 的理念

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