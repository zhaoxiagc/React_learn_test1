/* 
const [message. setMessage] = useLocalStorage(defaultValue)
1. message 可以通过自定义传入默认值
2. 每次修改 message 数据的时候，就会自动往本地同步一份

*/

import {useState, useEffect} from 'react';


export function useLocalStorage(key,defaultValue){
    const[message, setMessage] = useState(defaultValue);

    //每次只要 message 变化，就会自动同步到本地 ls
    useEffect(()=>{
        window.localStorage.setItem(key, message)
    }, [message, key])
    
    return [message, setMessage];
}