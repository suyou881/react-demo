import React, { useContext, createContext } from 'react';

const UserContext = createContext({ username: 'unknown', age: 0 });

export default function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div>
        {/* 지금처럼 value에 객체 형식으로 값을 넣어주면 
        App 컴포넌트가 랜더링 될 때 마다 매번 새로운 객체가 만들어 진다.
        따라서 Provider value 값이 변경되지 않아도
        Consumer 는 매번 불필요하게 랜더링이 될 수 있따. */}
      <UserContext.Provider value={{ username, age }}>
        <Profile />
        <button onClick={()=>setCount(count+1)}>증가</button>
      </UserContext.Provider>
    </div>
  );
}
