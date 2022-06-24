/*속성값으로 전달되는 함수는 렌더링할 때마다 변경되는 경우가 많다.
이로 인해 부수효과 함수가 불필요하게 자주 호출될 수 있다.
아래 의존성 배열에 onClick 함수가 들어가 있다. 만약 이를 해결하는 마땅한 방법이 떠오르지 않는다면?
useRef훅이 해결책이 될 수 있따.
go to 7.js*/
import { useEffect } from "react";

export default function MyComponent({ onClick }) {
  useEffect(() => {
    window.addEventListener("click", () => {
      onClick();
      // ...
    });
  }, [onClick]);
  // ...
}
