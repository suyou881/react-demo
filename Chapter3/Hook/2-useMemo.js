//useMemo 훅은 계산량이 많은 함수의 반환 값을 재활용하는 용도.
//이 코드에서는 runExpensiveJob 함수가 계산량이 많다고 가정해보자.
import React, { useMemo, useState } from 'react';

export default function App() {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  //첫번째 매게변수로 함수를 넘기면 리액트가 함수가 실행된 결과값을 기억한다.
  //이 함수는 2번째 매개변수로 입력된 배열에 있는 값중 하나라도 변경되면 실행된다.
  //만약 2번째 배개변수의 값 들중 변경되지 않았다면 이전에 실행해서 저장했던 값을 재활용한다.
  //useEffect와 마찬가치로 2번째 배열은 의존성 배열이다.
  //value는 runExpensiveJob가 실행된 결과값이다.
  const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);
  return (
    <>
      <p>{`value is ${value}`}</p>
      <button
        onClick={() => {
          setV1(Math.random());
          setV2(Math.random());
        }}
      >
        v1/v2 수정
      </button>
      <p>{`v3 is ${v3}`}</p>
      <button onClick={() => setV3(Math.random())}>v3 수정</button>
    </>
  );
}

function runExpensiveJob(v1, v2) {
  console.log('runExpensiveJob is called');
  // run something too expensive
  return v1 + v2;
}
