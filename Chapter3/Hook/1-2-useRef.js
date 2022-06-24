import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20);
  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);
  //useEffect는 렌더링된 후에 호출이 된다.
  //그래서 컴포넌트 함수 안에서 아래처럼 렌더링을 할 때는 
  //prevAgeRef는 이전 값을 가리키고 있따가 그 이후에 갱슨을 하게 된다.
  //그래서 이전 값을 기반으로 뭔가 처리를 할 수 있게 된다.
  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';
  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이 변경
      </button>
    </div>
  );
}
