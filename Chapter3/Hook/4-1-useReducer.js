import React, { useReducer } from 'react';

export default function App() {
    //상태값이 반환되고, useState처럼 상태값을 변경할 수 있는 dispatch 함수가 반환된다.
    //첫번째 매개변수에는 reducer 라는 함수를 입력하고
    //두번째 매개변수에는 초기값을 입력한다.
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type="text"
        value={state.name}
        onChange={e =>
          dispatch({ type: 'setName', name: e.currentTarget.value })
        }
      />
      <input
        type="number"
        value={state.age}
        onChange={e => dispatch({ type: 'setAge', age: e.currentTarget.value })}
      />
    </div>
  );
}

const INITIAL_STATE = { name: 'empty', age: 0 };
const MAX_AGE = 50;
//현재 상태값과 action이 입력이 되고
//action에 따라서 상태값을 어떻게 변경할지 판단하고 있다.
//reducer 함수를 이용하면 상태값을 변경하는 로직을 분리할 수 있는게 장점이다.
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      if (action.age > MAX_AGE) {
        return { ...state, age: MAX_AGE };
      } else {
        return { ...state, age: action.age };
      }
    default:
      return state;
  }
}
