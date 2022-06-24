//실제 돔 요소에 직접 접근해야 할 때가 잇다.
//예를 들어 돔 요소에 포커스를 주거나 크기 등을 알고 싶을때
//이때는 ref 속성값을 이용하면 자식요소에 직접 접근할 수 있다.
//자식요소는 컴포넌트일 수도 잇고, 돔 요소일 수도 있다.

import React, { useRef, useEffect } from 'react';

export default function App() {
    //useRef 훅을 사용하고, 이 반환된 값을 원하는 요소에 
    //ref 속성값으로 넣어주면 된다. 그렇게 하면
    //current 라는 속성은 실제 돔 요소를 가리키게 된다.
    //따라서 실제 돔에 있는 이 focus 함수를 실행할 수 있다.
  const inputRef = useRef();
  useEffect(() => {
    //중요!!
    //실제 돔 요소는 렌더링 결과가 실제 돔에 반영된 후에 접근 가능하기 때문에
    //부수 효과 함수 안에서 접근 할 수 있다.
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef}/>
      {/* 컴포넌트에서도 ref 속성값을 사용할 수 있다.
      만약 컴포넌트가 클래스형 컴포넌트라면 해당 컴포넌트의 인스턴스를 가리킨다.
      따라서 current 속성은 해당 클래스의 메서드를 호출할 수 있다.
      함수형 컴포넌트는 인스턴스로 만들어지지 않지만,
      useImperativeHandle 이라는 훅을 사용하면 함수형 컴포넌트에서도
      마치 클래스형 컴포넌트의 멤버 변수나 메서드를 접근하는 것처럼
      함수형 컴포넌트 내부의 변수와 함수를 외부로 노출 시킬 수 있다. */}
      <Box ref={inputRef}/>
      <button>저장</button>
    </div>
  );
}

function Box(){
  return <></>
}
