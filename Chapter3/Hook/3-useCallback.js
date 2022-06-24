//useMeomo훅과 많이 비슷하다.
//함수 메모이제이션에 특화된 훅이다.

import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);
  
  const onSave = useCallback(()=>saveToServer(name,age),[name,age]);

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEdit
      //함수를 입력해서 속성값으로 전달할 때는 App 컴포넌트가 랜더링 될때마다
      //새로운 함수가 생성되서 입력이 된다.이러면 이 컴포넌트가 랜더링이 될때마다
      //onSave 값이 변경되기 때문에 자식 컴포넌트인 UserEdit 입장에서는
      //사실상 함수의 내용은 같지만 새로운 속성값을 입력받게 된다.
      //그래서 불필요한 랜더링이 발생한다.
      //이럴 때 useCallback 훅을 사용하면 해결 할 수 있다.
    
      //onSave={() => saveToServer(name, age)}
        onSave={onSave}
        setName={setName}
        setAge={setAge}
      />
      <p>{`v1: ${v1}`}</p>
      <button onClick={() => setV1(Math.random())}>v1 수정</button>
    </div>
  );
}

const UserEdit = React.memo(function ({ onSave, setName, setAge }) {
  console.log('UserEdit render');
  return null;
});

function saveToServer(name, age) {}
