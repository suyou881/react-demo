//의존성 배열에 필요한 변수를 입력하지 않았을 때 어떤 문제가 발생할까?
/* value1이 변경되면 렌더링이 될 때, 부수효과 함수가 생성이 되고 그게 나중에 비동기로 호출이 된다.
그리고 이후에 value2가 변경이 됏을 때도 부수효과 함수는 새로 생성이 되지만
의존성 배열에는 value2가 없기 때문에 리액트는 방금 생성된 부수효과 함수를 무시하고 
예전에 value1이 변경될 때 생성된 부수효과 함수를 계속해서 사용한다
함수가 생성될 때는 그 함수가 생성될 당시의 지역변수를 기억하고 있따.
그것을 실행 컨텍스트라고 한다.
value1이 변경됐을 때 생성되는 이 함수는 그 당시의 지역변수의 값을 기억하고 있다 
그리고 이후에 value2가 변경이 되도 value1이 변경될 때 생성된 그 함수는 
예전의 value2를 계속 바라보고 있는 것이다. 
따라서 이렇게 의존성 배열에 value2를 입력하지 않으면
부수효과 함수는 오래된 value2를 사용하게 되는 문제가 있다.
*/

import { useState, useEffect } from "react";

export default function MyComponent() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const id = setInterval(() => console.log(value1, value2), 1000);
    return () => clearInterval(id);
  }, [value1]);
  return (
    <div>
      <button onClick={() => setValue1(value1 + 1)}>value1 증가</button>
      <button onClick={() => setValue2(value2 + 1)}>value2 증가</button>
    </div>
  );
}
