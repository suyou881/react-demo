import React, {useState}from 'react';
import Title from './Title';

export default function Counter(){
    //상태 값 또한 불변으로 관리하는게 좋다.
    const [count, setCount] = useState({value:0});

    function onClick(){
        count.value +=1;
        setCount({...count, value:count.value +1});
    }

    return (
        <div>
            {/* &&를 사용하면 왼쪽에 있는 조건이 모두 만족이 되어야
            뒤에 있는것이 렌더링이 된다. */}
            {count.value > 0 && <Title title={`현재 카운트: ${count.value}`}/>}
            <button onClick={onClick}>증가</button>
        </div>
    )
}
