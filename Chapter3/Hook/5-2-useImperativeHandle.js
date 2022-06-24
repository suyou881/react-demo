import React, { useRef } from 'react';
import Profile from './Profile';

export default function App() {
    //useRef 훅을 이용해서 ref 객체를 Profile 컴포넌트의 ref 속성값으로 넘겨주고 있다.
    //이렇게 되면 profileRef.current는 Profile 컴포넌트쪽에서
    //useImperativeHandle의 두번째 매개변수인 함수가 반환하는 값을 참조하게 된다.
    //그래서 자식이 제공해준 두가지 함수를 사용할 수 있게 되는것이다.
    //profileRef.current.getNameLength() , profileRef.current.addAge(5)
  const profileRef = useRef();
  const onClick = () => {
    if (profileRef.current) {
      console.log('current name length:', profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  };
  return (
    <div>
      <Profile ref={profileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  );
}

