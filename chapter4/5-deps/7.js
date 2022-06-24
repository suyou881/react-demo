
import { useRef, useEffect } from "react";

export default function MyComponent({ onClick }) {
  const onClickRef = useRef();
  useEffect(() => {
    //렌더링이 될 때마다 ref 객체에 onClick 함수를 넣어준다.
    onClickRef.current = onClick;
  });
  useEffect(() => {
    window.addEventListener("click", () => {
        //그리고 원래 사용하려던 곳에서 ref 객체를 이용해서 함수를 호출한다.
        //이렇게 부수효과 ㅎ마수에서 사용된 ref 객체는 의존성 배열에 추가할 필요가 없다.
        //그런데 의존성 배열에 이 함수를 입력하지 않으려고 불필요한 코드와 연산이 추가됐다.
        //이러한 것들은 의존성 배열을 관리하는 규칙을 지키기 위한 것이다.
        //이런 부분이 리액트 훅의 단점이다.
      onClickRef.current();
      // ...
    });
    // ...
  });
  // ...
}
