/* 클래스형 컴포넌트의 부모 컴포넌트는 ref 객체를 통해서
자식 컴포넌트의 메서드를 호출할 수 있다. 이 방식은 자식 컴포넌트에 대한
의존성이 생기므로 지양하는게 맞지만 종종 필요한 경우가 있다.
이 때, useImperativeHandle 훅을 이용하면 마치 함수형 컴포넌트에도
멤버 변수나 멤버 함수가 있는 것처럼 만들 수 있다. 
*/

import React, { forwardRef, useState, useImperativeHandle } from 'react';

//속성값은 사용하지 않고, ref 속성값만 사용하고 있다.
//그 ref 속성값을 받아서 useImperativeHandle의 첫번째 매개변수로 넣어줬다.
//두번 째 매개변수로 함수가 있는데 이 함수가 반환한 값이
//이 부모의 ref 객체가 참조하는 값이 된다.
function Profile(_, ref) {
  const [name, setName] = useState('mike');
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: value => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      {/* ... */}
    </div>
  );
}

//ref 속성를 받기 위해서 forwardRef 함수를 사용했다.
export default forwardRef(Profile);
