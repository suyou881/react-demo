import React, { useEffect, useState } from 'react';

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag(prev => !prev), 1000);
  });
  const fruits = flag ? FRUITS_1 : FRUITS_2;
  return (
    <div>
        {/* 아래처럼 배열의 중간에 원소를 추가하는 경우에는 순서 정보가 아니라 아이디 값을 넣어주는게 좋다. */}
        {/* {fruits.map((item, index) => (
            <p key={index}>{item}</p>
        ))} */}
      {fruits.map((item, index) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}


const FRUITS_1 = ['사과', '바나나'];
const FRUITS_2 = ['사과', '파인애플', '바나나'];
