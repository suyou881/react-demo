/*컴포넌트 함수 내부에서 생성되는 함수와 객체에 대ㅐㅎ 알아보자.*/

import { useState } from "react";

function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      {/* 자식 컴포넌트에서 리액트 memo 함수를 사용했다고 했을 때 만약 아래 selected 속성값이 변경되지 않으면
      자식 컴포넌트는 렌더링이 되지 않을 거라고 생각하기 쉽지만 아래처럼 익명함수를 작성하면
      매번 렌더링을 할 때마다 새로운 값이 입력되지 때문에 리액트 memo를 사용했다고 하더라도 아래 컴포넌트는 렌더링이 된다.
      아래와 같이 단순하게 상태값을 변경하는 로직이라면 상태값 변경 함수를 넣어주면 간단하게 해결 할 수 있다.
      setSelectedFruit 함수는 한번 생성되고 변경되지 않기때문이다.*/}
      <SelectFruit
        selected={selectedFruit}
        //onChange={(fruit) => setSelectedFruit(fruit)}
        onChange={setSelectedFruit}
      />
    </div>
  );
}
