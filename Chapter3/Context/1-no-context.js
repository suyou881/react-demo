/* App 컴포넌트에서 username을 전달해주는데
Profile 컴포넌트에서는 사용하지 않지만 Greeting 컴포넌트로 넘겨준다.
자신은 사용하지 않으면서 밑으로 내려주는 기계적인 코드가 필요하다.
이때, Context를 사용하면 좀더 간편하게 코드를 작성할 수 있다.
go to 2
*/

import React from 'react';

export default function App() {
  return (
    <div>
      <div>상단 메뉴</div>
      <Profile username="mike" />
      <div>하단 메뉴</div>
    </div>
  );
}

function Profile({ username }) {
  return (
    <div>
      <Greeting username={username} />
      {/* ... */}
    </div>
  );
}

function Greeting({ username }) {
  return <p>{`${username}님 안녕하세요`}</p>;
}
