import React, {useState}from 'react';
import Title from './Title';

export default function Counter(){
    //상태 값 또한 불변으로 관리하는게 좋다.
    const [count, setCount] = useState({value:0});
    const [count2, setCount2] = useState(0);
    //리액트는 상태값 변경 유무를 이전 값과의 단순 비교로 판단을 한다.
    // count가 현재 객체이다.
    //그런데 여기서 count가 참조하는 값은 변하기 않았고
    //단순히 내부의 속성값만 변경이 된 상태이기 때문에
    //리액트는 값이 변경되지 않았다고 판단한다.

    //상태값도 속성값과 마찬가지고 불변으로 관리하는게 좋다.
    //객체를 불변변수로 관리하는 한가지 방법은 전개 연산자를 이용하는 것.
    function onClick(){
        count.value +=1;
        //count 객체에 있는 모든 속성값을 풀고, 변경하고 하는 값만 할당을 해주는것.
        setCount({...count, value:count.value +1});
    }
    function onClick2(){
        setCount2(count2+1);
    }
    return (
        <div>
            <Title title={`현재 카운트: ${count.value}`}/>
            <button onClick={onClick}>증가</button>
            <button onClick={onClick2}>증가2</button>
        </div>
    )
}
