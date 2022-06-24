import React, { useContext, createContext } from 'react';

function Greeting() {
  const setUser = useContext(SetUserContext);
  const { username, helloCount } = useContext(UserContext);
  return (
    <React.Fragment>
      <p>{`${username}님 안녕하세요`}</p>
      <p>{`인사 횟수: ${helloCount}`}</p>
      {/* 상태값 변경 함수를 가져다 쓰는 곳 */}
      <button onClick={() => setUser({ username, helloCount: helloCount + 1 })}>
        인사하기
      </button>
    </React.Fragment>
  );
}
