import React, {useState, useEffect} from 'react';

export default function WidthPrinter(){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const onResize = ()=> setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        //부수 효과 함수에서 반환하는 함수는
        //다음 부수 효과 함수가 호출되기 직전에 호출된다.
        //또는 컴포넌트가 unmount 되기 직전에 마지막으로 호출된다.
        //따라서 적어도 한번은 호출된다는 것이 보장된다.
        return () =>{
            window.removeEventListener('resize', onResize);
        };
    },[])

    return <div>{`width is ${width}`}</div>;
}