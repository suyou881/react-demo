//컴포넌트가 생성된 이후라도 ref 객체의 current 속성이 없을 수 있다.

import React, { useRef, useState } from "react";

export default function App() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>
        텍스트 보이기/가리기
      </button>
      {/* inputRef 요소가 없을 때 아래 button을 클릭하게 되면 문제가 될 수 있다.
        따라서 조건부 렌더링에 사용된 요소의 ref 객체는 current 속성을 검사하는 코드가 필요하다.*/}
      <button onClick={() => inputRef.current && inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}
