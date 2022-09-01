//react 如何完成列表渲染
//技术方案：map
//重复渲染的是哪个模板，就 return 谁
//注意事项：在遍历列表时，同样需要一个类型为 number/string 类型的不可重复的 key 提高 diff 性能
//key 仅仅在内部使用，不会出现在真实的 DOM 中


const songs = [
    {id:1, name: "两只老虎"},
    {id:2, name:"种太阳"},
    {id:3, name:"采蘑菇的小姑娘"}
]

function App() {
    return (
        <div className="App">
            <ul>
                {songs.map(song=><li key={song.id}>{song.name}</li>)}
            </ul>
        </div>
    )
}

export default App;