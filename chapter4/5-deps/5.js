import { useReducer, useEffect } from "react";

export default function Timer({ initialTotalSeconds }) {
    //dispatch 함수는 변하지 않는 값이므로 의존성 배열에서 제거할 수 있다.
  const [state, dispatch] = useReducer(reducer, {
    hour: Math.floor(initialTotalSeconds / 3600),
    minute: Math.floor((initialTotalSeconds % 3600) / 60),
    second: initialTotalSeconds % 60,
  });
  const { hour, minute, second } = state;
  useEffect(() => {
    const id = setInterval(dispatch, 1000);
    return () => clearInterval(id);
  });
  // ...
}

//값이 변경되는 함수는 reducer 안에서 작성을 한다.
//물론 하나의 useState훅에서 시,분,초를 하나의 객체로 만들어서 관리할 수도 있다.
//다만, useReducer를 사용하면 다양한 액션과 상태값을 관리하기 용이하고
//상태값 변경 로직을 여러 곳에서 재사용 하기에도 좋다.
function reducer(state) {
  const { hour, minute, second } = state;
  if (second) {
    return { ...state, second: second - 1 };
  } else if (minute) {
    return { ...state, minute: minute - 1, second: 59 };
  } else if (hour) {
    return {...state, hour: hour - 1, minute: 59, second: 59 };
  } else {
    return state;
  }
}
