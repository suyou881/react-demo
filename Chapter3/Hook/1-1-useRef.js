import { useRef, useEffect } from "react";

export default function App() {
    //ref 객체는 꼭 돔 요소를 참조할 때만 사용할 수 있는 건 아니다.
    //랜더링과 상관없는 값을 저장할 때 useRef가 유용하게 사용될 수 있다.
    //물론 useState로 관리할 수도 있긴 하다.
    //하지만 적합하지 않다. useState를 사용했을 때는, 
    //timerIdRef가 변경됏을 때 다시 렌더링이 될 것이다.
    //하지만 UI 데이터가 아니기 때문에 렌더링 결과는 똑같다.
    //그래서 불필요하게 렌더링만 발생하게 된다.
    //그래서 ref 객체가 더 적합한 상황이다.
  const timerIdRef = useRef(-1);
  useEffect(() => {
    timerIdRef.current = setTimeout(() => {}, 1000);
  });
  // ...
  useEffect(() => {
    if (timerIdRef.current >= 0) {
      clearTimeout(timerIdRef.current);
    }
  });
  // ...
}
