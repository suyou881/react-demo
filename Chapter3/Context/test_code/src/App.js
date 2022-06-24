// /*1,2 내용*/
// import React, { createContext, useContext, useState } from 'react';

// //초기값을 설정해주면 객체가 반환이 된다.
// //그리고 이 객체 안에는 Provider와 Consumer 컴포넌트가 들어있다.
// //Provider에서 value를 넣어주면 Consumer에서 그 값을 받아서 처리 할 수 있다.


// const UserContext = createContext('unknown');
// const ThemeContext = createContext('dark');

// export default function App() {
//   //이렇게 데이터의 종류별로 Context를 나누면 랜더링 성능상 이점이 있다.
//   //예를 들면 사용자 정보가 변경되었을 때,
//   //ThemeContext만 사용하는 곳에서는 불필요하게 랜더링이 되지 않을 것이다.
//   //만약 하나의 context로 관리가 됐었다면 사용자 정보만 변경이 되도 
//   //불필요하게 랜더링이 되는 상황이 있을것이다.
//     const [name, setName]=useState('mike');
//     const [color, setColor]=useState('white');

//   return (
//     <div>
//       <ThemeContext.Provider value={color}>
//       <UserContext.Provider value={name}>
//         <div>상단 메뉴</div>
//         <Profile />
//         <div>하단 메뉴</div>
//         <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
//         <br/>
//         <button onClick={()=>{setColor("dark")}}>버튼</button>
//       </UserContext.Provider>
//       </ThemeContext.Provider>
//     </div>
//   );
// }

// //Profile 컴포넌트가 랜더링 되지 않는다는 것을 확인하기 위해 React.memo로 감쌌다.
// //Provider 컴포넌트와 Consumer 컴포넌트 사이에 중간에 있는 컴포넌트가
// //렌더링 되지 않아도 Consumer 컴포넌트의 업데이트가 잘 된다.
// const Profile = React.memo( function Profile() {
//   console.log('Profile render');
//   return (
//     <div>
//       <Greeting />
//       {/* ... */}
//     </div>
//   );
// });

// function Greeting() {
//   //useContext 훅을 사용하는 것이 훨씬 간편하고 좋다!
//   const theme = useContext(ThemeContext);
//   const username = useContext(UserContext);

//   return (
//     //render props 패턴으로 작성한 코드
//     //children을 함수 형태로 작성하는 것.
//     //실제로 Consumer 컴포넌트를 구현할 때 이 children 함수를 호출해주는 방식으로 동작한다.
//     //Consumer가 사용이 됐을 때 필요한 값을 찾기 위해서 부모로 올라가면서 가장 가까운 Provider를 찾는다.
//     //만약 최상단인 루트까지 올라갔는데도 Provider 컴포넌트를 찾지 못하면 위에서 정의한 'unknown'이 사용된다.
//     //Provider의 값이 변경되면 하위의 모든 Consumer 컴포넌트는 다시 랜더링이 된다.
//     //그러나 Consumer를 컴포넌트로 작성하는 일은 거의 없다.
//     //위에처럼 사용한다.
//     // <UserContext.Consumer>
//     //   {username => <p>{`${username}님 안녕하세요`}</p>}
//     // </UserContext.Consumer>
    
//     <p
//     style={{color: theme === 'dark' ? 'gray' : 'green'}}>
//       {`${username}님 안녕하세요`}
//       </p>
//   );
// }




/*6*/
import React, { useContext, useState, createContext } from 'react';

const UserContext = createContext({ username: 'unknown', age: 0 });

export default function App() {
  // const [username, setUsername] = useState('teo');
  // const [age, setAge] = useState(0);
  
  //위에 각각 따로 관리되고 있는 username과 age를 user 하나로 관리하고
  //아래 provider에서 value값에 user를 넣어줌으로 Greeting 컴포넌트는 렌더링이 되지 않는다.
  //그 전에는 app 컴포넌트가 렌더가 될때마다 value에 새로운 객체가 만들어 졌었었다.
  const [user, setUser] = useState({username:'tee', age:23});
  const [count, setCount ]= useState(0);
  console.log('App render');

  return (
    <div>
      <UserContext.Provider value={user}>
        <Profile />
        {/* 버튼을 누르면 App 과 Greeting 컴포넌트 2개가 랜더링이 된다.
        그런데 Greeting 컴포넌트는 count 상태값과는 관련이 없다.
        교정해보자. 
        UserContext.Provider value 에서 매번 새로운 객체가 만들어 지지 않도록 해야 한다.*/}
        <button onClick={()=>setCount(count+1)}>증가</button>
      </UserContext.Provider>
    </div>
  );
}

const Profile = React.memo( function Profile() {
  console.log('Profile render');
  return (
    <div>
      <Greeting />
      {/* ... */}
    </div>
  );
});

function Greeting(){
  console.log('Greeting render');
  const {username} = useContext(UserContext);
  return <p>{`${username}님 안녕하세요`}</p>
}