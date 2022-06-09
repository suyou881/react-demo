// import React from 'react';

// console.log(
//   <a key='key1' style={{width:100}} href='http://google.com'>
//         click here
//     </a>
// );

// export default function App(){
//   return <p>app</p>;
// }

import {useState, useEffect} from 'react';
import Counter from './Counter';

export default function App(){
    const [seconds, setSeconds] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setSeconds(v=>v+1);
        },1000);
    });
    return (
        //구글 개발자모드 요소에서 보면 붙었다가 사라졌다가 한다.
        //key가 변경되면 리액트는 이것은 다른 요소라고 판단하고
        //이전것을 삭제하고 새로 만들어서 붙인다.
        //<div key={seconds}>
        <div>
            {/* 돔과 마찬가지로 key가 있으면
            해당 컴포넌트는 삭제됐다가 다시 추가가 된다.
            Mount --> 컴포넌트가 추가되는 것.
            Unmount --> 컴포넌트가 삭제되는 것
            컴포넌트가 mount 될 때는 useState에 할당된 초기값이 상태값으로 할당이 된다.
            따라서 1초에 한번씩 0이 할당된다.*/}
            <Counter key={seconds}></Counter>
            <h1 style={{color: seconds%2 ? 'red' : 'blue'}}>hi</h1>
            <h2>지금까지 {seconds}초가 지났습니다.</h2>
        </div>
    )
}