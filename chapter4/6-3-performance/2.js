//요소의 타입이 아니라 속성값만 변경했을 때는 해당하는 속성만 변경이 된다.
//자식 컴포넌트도 영향이 없다.

import React, { useEffect, useState } from 'react';

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag(prev => !prev), 1000);
  });
  return (
    <div
      className={flag ? 'yes' : 'no'}
      style={{ color: 'black', backgroundColor: flag ? '#ffaaaa' : '#aaffaa' }}
    >
      <Counter />
      <p>사과</p>
      <p>바나나</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setCount(prev => prev + 1), 100);
    return () => clearTimeout(id);
  });
  return <p>count: {count}</p>;
}
