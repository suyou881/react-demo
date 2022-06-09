import React, {useState, useEffect} from 'react';

/*  특별한 이유가 없다면 모든 부수효과는 useeffect 훅에서 처리하는게 좋다.
    컴포넌트 렌더링 중에 부수 효과를 발생시키는 것은
    프로그램의 복잡도를 크게 증가시킨다.
    유닛테스트를 하기 힘들어지는 등 순수 함수가 가지는 여러 장점을 포기하는 것이다.
    컴포넌트 렌더링 중에 굳이 부수 효과를 발생시킬 이유는 없다.
    대부분 렌더링 후에 처리해도 된다. */

/*  첫번째 매개변수로 함수를 입력하게 되면
    이 함수는 컴포넌트가 렌더링 된 후에 호출이 된다.
    좀 더 정확히 말하면 렌더링 결과가 실제 돔에 반영되고 비동기로 호출이 된다.
    첫 번째 매개변수 함수를 부수 효과 함수라고 부른다.
    */
export default function App(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `업데이트 횟수: ${count}`;
    });
    return <button onClick={()=>setCount(count+1)}>increase</button>;
}