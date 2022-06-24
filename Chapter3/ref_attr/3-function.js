import React, { useCallback, useState } from "react";

export default function App() {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);

  const setInitialText = useCallback((ref) => ref && setText(INITIAL_TEXT), []);

  return (
    <div>
      {showText && (
        <input
          type="text"
          //ref 속성값에 함수를 입력하는 코드
          //useRef를 사용하지 않고 ref 속성값에 함수를 입력할 수 있다.
          //이 함수는 해당하는 요소가 생성되거나 사라질 때 한 번씩 호출된다.
          //생성될 때는 해당하는 요소의 레퍼런스가 넘어오고
          //사라질 때는 null 값이 넘어온다.
          //input 에 타이핑을 해도 초기값인 '안녕하세요' 고정 되어있다.
          //이렇게 동작하는 이유는 컴포넌트가 렌더링 될 때마다 ref 함수를
          //입력하고 있기 때문이다. 리액트는 ref 속성값으로 새로운 값이 들어오면 
          //이전 함숭 null 인수를 넣어서 호출을 하고 
          //새로운 함수에는 요소의 참조값을 넣어서 호출을 한다.
          //따라서 문자를 타이핑 할 때 계속 컴포넌트가 렌더링이 될텐데 그때마다
          //새로운 함수가 입력이 되면서 INITIAL_TEXT가 계속해서 입력이 되기 때문에 
          //text가 입력하는 텍스트로 제대로 업데이트 되지 않는것이다.
          //이것을 해결하기 위해서는 ref 함수를 고정시킬 필요가 있다.
          //useCallback  훅을 사용하면 된다.
          //useCallback 훅의 메모이제이션 기능 덕분에 한번 생성된
          //함수를 계속해서 재사용할 수 있다.
          ref={setInitialText}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  );
}

const INITIAL_TEXT = "안녕하세요";
