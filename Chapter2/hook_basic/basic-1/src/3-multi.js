import React, {useState} from 'react';

//여러개의 상태값을 하나의 useState로 관리할 수도 있다.
//객체를 이용하면 된다.
//상태값 변경 함수를 호출할 때는 전체 객체를 새로 입력해 줘야한다.
//앞에는 ...state 와 같은 코드
//뒤에는 변경할 값은 뒤에 작성을 해준다.
//사실 이렇게 여러개의 상태값을 관리할 때는
//useState 보다 useReducer 라는 훅이 더 적합하다.
export default function App(){
    const [state, setState] = useState({name:'', age:0});

    return (
        <>
            <p>{`name is ${state.name}`}</p>
            <p>{`age is ${state.age}`}</p>
            <input
                type="text"
                value={state.name}
                onChange={e=> setState({...state, name:e.target.value})}
            />
            <input
                type="number"
                value={state.age}
                onChange={e=> setState({...state, age:e.target.value})}
            />
        </>
    )
}