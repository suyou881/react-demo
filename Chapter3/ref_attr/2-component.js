import React, { useRef, useEffect } from "react";

export default function App() {
  const inputRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      {/* 사실 별다른 처리를 하지 않았다면 함수형 컴포넌트에
      ref 속성값을 입력할 수는 없다.
      그래서 이 코드에서는 iputRef라는 속성이름으로 넘겨주고 있다.
      이렇게 사용해도 되지만, 때로는 BUtton 이라는 직관적인
      컴포넌트를 사용해서 쓰는 경우 가 많다. 이 경우는 ref로 입력하는게 좋다. 
      buttonRef 라는 독자적인 이름을 사용하는 것 보다는 일관성을 위해
      ref로 사용하고 싶을 수 있다. 하지만 이렇게 ref 라는 이름으로 입력을 하게 되면
      리액트가 내부적으로 처리하기 때문에, Button 컴포넌트 내부에서 그 값을 사용할 수가 없다.
      이런 경우를 위해서 forwardRef 라는 함수를 사용할 수 있다.*/}
      <InputAndSave inputRef={inputRef} />
      <Button ref={buttonRef}/>
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

//이 컴포넌트에서는 ref 라는 이름으로 속성을 받기 힘든 이유는
//사용하는 쪽에서 어떤 요소의 레퍼런스인지 알기 쉽지 않기때문.
//그래서 여기에서는 inputRef 라는 이름이 조금 더 적합하다.
function InputAndSave({ inputRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  );
}

//두번째 매개변수로 ref 속성값을 받을 수 있다.
const Button = React.forwardRef(function ({ onClick }, ref) {
  console.log(ref);
  return (
    <button onClick={onClick} ref={ref}>
      저장
    </button>
  );
});
