import React, { useState } from "react";
import Counter from './Counter';

export default function App() {
  const [color, setColor] = useState("red");
  function onClick() {
    setColor("blue");
  }

  return (
    <div>
      {/* 같은 컴포넌트라 해도 자신만의 메모리 공간이 있기 때문에
      각자의 상태값을 가지고 있따. */}
      <Counter></Counter>
      <Counter></Counter>
      <button style={{ backgroundColor: color }} onClick={onClick}>
        좋아요
      </button>
    </div>
  );
}
