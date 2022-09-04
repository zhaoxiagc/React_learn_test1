import { useState, useEffect } from "react";

export function useWindowScroll () {
    const [y, setY] = useState(0);
    //在滚动行为发生的时候，不断获取滚动值，然后交给 y
    window.addEventListener('scroll', () =>{
        const h = document.documentElement.scrollTop;
        setY(h);
    })
    return [y];
}