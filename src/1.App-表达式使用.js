//1. 识别常规的变量
//2. 原生 js 方法调用
//3. 三元运算符（常用）

const name = "zhaoxia";
const getAge = () =>{
  return 23;
}
const flag = true;

function App() {
  return (
    <div className="App">
      {name}
      {getAge()}
      {flag ? '真棒':'真菜'}
    </div>
  );
}

export default App;
