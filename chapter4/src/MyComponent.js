//속성값 비교 함수가 어떻게 동작하는지 알아보자.

import React from "react";

function MyComponent({ value1, value2 }) {
  console.log("MyComponent render");
  return (
    <div>
      <p>{`value1: ${value1}`}</p>
      <p>{`value2: ${value2}`}</p>
    </div>
  );
}

function isEqual(prevProps, nextProps) {
    //항상 FALSE를 반환하고 있기 때문에 언제나 렌더링이 된다.
    //반대로 항상 true를 반환한다면 update가 되지 않는다.
//   return false;

//지금은 value1이 중요한 값이 된 상황.
//여기서는 value2 버튼을 눌러도 반영이 안되고 val1을 누르게 되면
//val2를 누른 만큼 반영이 된다.
//return prevProps.value1 === nextProps.value1;

//지금은 val1 이나 val2 버튼 아무거나 눌러도 잘 작동한다.
return prevProps===nextProps;
}

export default React.memo(MyComponent, isEqual);
