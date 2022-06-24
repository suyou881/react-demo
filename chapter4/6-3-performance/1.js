//요소의 타입을 변경하면 해당 요소의 모든 자식 요소도 같이 변경된다!

import React, { useEffect, useState } from 'react';

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag(prev => !prev), 1000);
  });
  if (flag) {
    return (
        //자식 요소가 많은 요소의 타입을 변경하면 화면이 끊기는 느낌이 들 수 있다.
      <div>
        <Counter />
        <p>사과</p>
        <p>바나나</p>
      </div>
    );
  } else {
    return (
      <span>
        <Counter />
        <p>사과</p>
        <p>바나나</p>
      </span>
    );
  }
}

//1초마다 부모의 상태값이 변경되기 때문에 Counter() 안에서 count 또한 상태값이 0으로 초기화 된다.
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setCount(prev => prev + 1), 100);
    return () => clearTimeout(id);
  });
  return <p>count: {count}</p>;
}
