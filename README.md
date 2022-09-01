《React 入门带实战（2022全网最新）视频学习笔记》
该代码是我在听课学习 React 的过程中
跟着老师敲的代码

主要内容：
    react 基础概念
    react 中的 JSX 使用
        灵活，方便，能够直接解析 HTML 模板，不需要再利用原生 JS 生成
        JSX 相当于原生 JS 中的 createElement() 方法
    react 列表渲染
        常用列表渲染方法是 map，注意，必须写 key，防止报错
        key 的作用是在对列表进行处理的时候，进行数据区分，常用独一无二的字符串表示，不建议使用 index（排序时会发生错误）
        可以使用 uuid() 生成一个独一无二的字符串作为 key
    react 样式控制
        行内样式控制采用 style = "" 或者 style = {style} 的形式
        类名控制采用 className = "" 或者 className = {} 的形式
    react 组件（类组件和函数组件）
        创建组件
        渲染组件
    react 组件的状态修改
        类组件有状态，使用 state 创建数据， setState 修改数据
        函数组件无状态，需要使用 Hook 函数
    受控组件和非受控组件
        input、textarea 等组件的状态会受到 react 组件状态的控制，称为受控组件
        类似于 VUE 中的 v-model
        注意，需要熟悉事件绑定函数
    组件之间的通信
        组件之间的关系：父子关系、兄弟关系、其他关系
        父传子：利用组件的状态 state 创建数据，然后通过子组件属性值进行传递
                子组件收数据用 props(函数组件) 或者 this.props(类组件)
                父传子可以传各种类型的数据：数值、字符串、数组、布尔值、对象、函数、JSX
        子传父：父组件中定义一个函数，传递给子组件，子组件调用该函数，即可将对应的实参传递给父组件
        兄弟组件之间通信：借助于公共父组件
        Context 实现跨组件通信
    
