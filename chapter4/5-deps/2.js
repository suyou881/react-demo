import { useState, useEffect } from "react";

/**
 * 이전 상태값을 기반으로 다음 상태값을 계산하기 위해 상태값을 의존성 배열에 추가하는 경우가 있다.
 * 상태값 변경 함수에 함수를 입력해 주자(의존성 배열로 빈 배열을 입력했다고 보면 된다.)
 * 상태값 변경 함수에 함수를 입력할 때는 함수의 매개변수로 이전 상태값이 들어오기 때문이다.
 * 3번에 있따.
 */
export default function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function onClick() {
      setCount(count + 1);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [count]);
  // ...
}
