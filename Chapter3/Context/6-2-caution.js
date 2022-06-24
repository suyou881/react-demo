import React, { useContext, createContext } from 'react';

const UserContext = createContext('unknown');

export default function App() {
  return (
    <div>
        {/* Provider 컴포넌트 밖에서 Profile 컴포넌트를 렌더링을 할 때 
        Profile 안에 Greeting 컴포넌트가 렌더링이 되는데 
        Greeting 컴포넌트 입장에서는 루트로 올라갈 때까지
        Provider 컴포넌트를 만나지 못하게 된다.
        이럴 때는 'unknown' 초기값이 사용이 될 것이다.
        그래서 Consumer를 사용하는 쪽에서는 provider 안쪽에 작성을 해야한다.
        사실 대부분의 경우 context Provider 컴포넌트를 사용할 경우 루트에서 jsx 부분 전체를
        감싸는 방식으로 작성을 한다. 그 경우 Consumer 컴포넌트가 Provider 컴포넌트를
        못 찾는 일은 거의 없다. 하지만 루트 쪽이 아니라 provider 컴포넌트를 중간중간에 위치시킬때는
        그 위치에 주의를 해야 한다. */}
      <UserContext.Provider value="mike">{/* ... */}</UserContext.Provider>
      <Profile />
    </div>
  );
}
