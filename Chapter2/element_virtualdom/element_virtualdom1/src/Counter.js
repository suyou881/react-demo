import React, {useState}from 'react';

export default function Counter(){
    //상태 값 또한 불변으로 관리하는게 좋다.
    const [count, setCount] = useState(0);

    function onClick(){
        setCount(count+1);
    }

    return (
        <div>
            <p>{`현재 카운트: ${count}`}</p>
            <button onClick={onClick}>증가</button>
        </div>
    )
}
