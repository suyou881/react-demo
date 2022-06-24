import React, { useState, createContext } from 'react';
import Profile from './2-context'

const UserContext = createContext({ username: 'unknown', helloCount: 0 });
//데이터를 수정할 수 있는 함수를 별도의 Context로 분리해줄 수 있다.
const SetUserContext = createContext(() => {});

export default function App() {
    // 이렇게 여러 데이터를 객체 형식으로 관리할 때는
    // useState 보다는 useReducer를 사용하는게 더 낫다.
    // useReducer는 뒤에서 
  const [user, setUser] = useState({ username: 'mike', helloCount: 0 });
  return (
    <div>
        {/* 상태값 변경 함수를 내려주는 컴포넌트 */}
      <SetUserContext.Provider value={setUser}>
        {/* 데이터를 내려주는 컴포넌트 */}
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
}
