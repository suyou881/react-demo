/* 1 - 4 까지*/
// import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';

// export default function App(){
//     const [count, setCount] = useState(0);
//     function onClick(){
//       //상태값 변경 함수는 비동기이면서 배치(batch)로 처리되기 때문에
//       //코드에서 의도한대로 동작하지 않는다.
//       /* 
//       리액트는 효율적으로 랜더링 하기 위해서 여러개의 상태값 변경 요청을 배치로 처리한다.
//       따라서 onClick 함수가 호출이 되어도 로그는 한번만 출력이 된다.

//       만약 리액트가 상태값 변경 함수를 동기로 처리한다면?
//       하나의 상태값 변경 함수가 호출될 때마다 화면을 다시 그리기 때문에 성능 이슈가 생길 수 있다.
//       만약 동기로 처리하는데 매번 화면을 다시 그리지 않는다면?
//       UI 데이터와 화면간의 불일치가 발생해서 혼란스러울 수 있다.

//       해결하는 한가지 방법은? 상태값 변경 함수에 함수를 입력하는 방법이 있다.

//       여기서 onClick 이벤트는 리액트 요소에 입력이 되어 있기 때문에 배치로 처리가 되는것이다.
//       이렇게 하지 않고 리액트에서 관리하지 않는 외부에서 호출을 하는 경우에는 배치로 동작하지 않는다.
//       즉, 그러한 경우에는 상태값 변경 함수를 호출할 때마다 랜더링이 발생한다.
//       */
//         // setCount(count+1);
//         // setCount(count+1);

//         //setCount(c=>c+1);
//         //setCount(c=>c+1);
//         ReactDOM.unstable_batchedUpdates(()=>{
//           setCount(c=>c+1);
//           setCount(c=>c+1);
//          });
        
//     }
//     //배치로 처리 되지 않기 때문에 로그가 2번씩 출력된다.
//     //만약 외부에서 처리 될 때도 배치로 처리되길 원한다면?
//     //ReactDOM.unstable_batchedUpdates 라는 함수를 호출하면 된다.
//     useEffect(()=>{
//       window.addEventListener('click', onClick);
//       return ()=>window.removeEventListener('click',onClick);
//     });
//     console.log('render called');
//     return (
//         <>
//             <h2>{count}</h2>
//             <button onClick={onClick}>증가</button>
//         </>
//     );
// }

//5부터.. 5-2코드임
// import React, {useState} from 'react';
// import Profile from './5-1-useEffect-api';

// export default function App(){
//     const [userId, setUserId] = useState(0);
//     return (
//         <>
//             <Profile userId={userId}></Profile>
//             <button onClick={()=>{setUserId(userId+1)}}> userId 변경</button>
//         </>
//     )
// }

import React, {useState} from 'react';
import WidthPrinter from './WidthPrinter';

export default function App(){
  const [count, setCount]=useState(0);
  return (
    <>
      {count === 0 && <WidthPrinter/>}
      <button onClick={()=>{setCount(count+1)}}>증가</button>
    </>
  )
}