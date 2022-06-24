import React, { createContext } from 'react';

//초기값을 설정해주면 객체가 반환이 된다.
//그리고 이 객체 안에는 Provider와 Consumer 컴포넌트가 들어있다.
//Provider에서 value를 넣어주면 Consumer에서 그 값을 받아서 처리 할 수 있다.


const UserContext = createContext('unknown');

export default function App() {
    const [name, setName]=useState('mike');
  return (
    <div>
      <UserContext.Provider value="mike">
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
      </UserContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
      {/* ... */}
    </div>
  );
}

function Greeting() {
  return (
    //render props 패턴으로 작성한 코드
    //children을 함수 형태로 작성하는 것.
    //실제로 Consumer 컴포넌트를 구현할 때 이 children 함수를 호출해주는 방식으로 동작한다.
    //Consumer가 사용이 됐을 때 필요한 값을 찾기 위해서 부모로 올라가면서 가장 가까운 Provider를 찾는다.
    //만약 최상단인 루트까지 올라갔는데도 Provider 컴포넌트를 찾지 못하면 위에서 정의한 'unknown'이 사용된다.
    //Provider의 값이 변경되면 하위의 모든 Consumer 컴포넌트는 다시 랜더링이 된다.
    <UserContext.Consumer>
      {username => <p>{`${username}님 안녕하세요`}</p>}
    </UserContext.Consumer>
  );
}
