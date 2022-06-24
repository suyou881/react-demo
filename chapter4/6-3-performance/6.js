/*의도적으로 key 속성값을 이용해서 컴포넌트를 언마운트 시키는게 유용할 경우가 있다.
*/

import React from "react";

export default function App({ user }) {
  // ...
  return (
    <div>
      <p>사용자 상세 정보</p>
      {/* user 데어타가 변경됏을 때, 즉 사용자 자체가 변경됐을 때는 
      UserDetail 컴포넌트 안에서 유지하던 상태값을 초기화하고 싶을 수 있다.
      그럴 때는 이 컴포넌트의 key로 유저의 아이디로 입력을 하게 되면 
      아래 UserDetail 컴포넌트는 유저가 변경됐을 때 상태값이 모두 초기화 될 것이다. */}
      <UserDetail key={user.id} user={user} />
    </div>
  );
}

//사용자 정보를 받아서 렌더링을 하는 컴포넌트가 있다고 가정
function UserDetail({ user }) {
  // ...
}
