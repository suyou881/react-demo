//보통 리액트에서는 상위 컴포넌트에서 다수의 상태값을 관리한다.
//이때 자식 컴포넌트로부터 발생한 이벤트에서 상위 컴포넌트의 상태값을 변경해야 하는 경우가 많다.
//이를 위해서 상위 컴포넌트에서 트리의 깊은 곳까지 이벤트 처리 함수를 전달하기도 한다.
//그런데 이 작업은 상당히 손이 많이 가고 코드의 가독성도 떨어진다.
//useReducer 훅이랑 Context api 를 같이 이용하면 이벤트 처리 함수를 쉽게 전달 할 수 있다.

import React, { useReducer } from 'react';

export const ProfileDispatch = React.createContext(null);

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <SomeComponent />
      </ProfileDispatch.Provider>
    </div>
  );
}

const INITIAL_STATE = { name: 'empty', age: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      return { ...state, age: action.age };
    default:
      return state;
  }
}
