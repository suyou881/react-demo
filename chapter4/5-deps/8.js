/*ref 객체는 아래처럼 컴포넌트 함수에서 직접 변경해도 된다고 생각할 수 있지만 한가지 문제가 있다.
7번에서처럼 부수효과 함수 안에서 ref 객체를 수정하는 이유는 
나중에 도입될 react의 concurrent mode 때문이다.
concurrent mode로 동작할 때는 컴포넌트 함수가 실행 됐다고 하더라도
중간에 렌더링이 취소될 수 있다. 렌더링은 취소됐는데 ref객체에는
잘못된 정보가 저장될 수 있으므로 ref 객체는 컴포넌트 함수에서 직접 수정하면 안된다.
단, concurrent mode로 동작하지 않는 리액트 버전에서는 괜찮다.
나중을 위해 부수효과 함수 안에서 변경되도록 하는것이 좋다. */

import { useRef } from "react";

export default function MyComponent({ onClick }) {
  const onClickRef = useRef();
  onClickRef.current = onClick;
  // ...
}
