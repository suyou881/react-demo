import React, { useEffect, useState } from 'react';
/*일반적으로 새로운 요소를 추가하거나 삭제하면 해당 요소만 실제 돔에 추가 또는 삭제를 하고 기존 요소는 건드리지 않는다.
리액트는 가상 돔 비교를 통해서 앞에 두 요소는 변경되지 않았다는 것을 알 수 있다.(사과, 바나나)
따라서 파인애플을 추가하거나 삭제를 한다.
*/
export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag(prev => !prev), 1000);
  });
  if (flag) {
    return (
      <div>
        <p>사과</p>
        <p>바나나</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>사과</p>
        <p>바나나</p>
        <p>파인애플</p>
      </div>
    );
  }
}



/* 만약 파인애플이 바나나 뒤가 아니라 사과 파인애플 바나나 순서대로 있다면 어떻게 될까?
리액트는 중간에 요소를 추가하면 그 뒤에 있는 요소가 변경되지 않았다는 것을 알지 못한다.
바나나가 변경되지 않았다는 것을 알기 위해서는 모든 값을 비교해야 하는데 연산량이 꽤 많다.
리액트는 효율적으로 연산하기 위해서 순서 정보를 이용한다.
사과는 변함이 ㅇ벗고 두번째 요소는 바나나가 파인애플로 변경된다. 그 다음 바나나를 추가한다.
사실 여기서 아래쪽으로 변경될 때 바나나 요소를 건드리지 않고 중간에 파인애플만 넣는 게 가장 좋다.
어떻게?? key 속성값을 이용하면 파인애플만 실제 돔에 추가할 수 있다.
go to 4.js
*/
export default function App() {
    const [flag, setFlag] = useState(true);
    useEffect(() => {
      setTimeout(() => setFlag(prev => !prev), 1000);
    });
    if (flag) {
      return (
        <div>
          <p>사과</p>
          <p>바나나</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>사과</p>
          <p>파인애플</p>
          <p>바나나</p>
        </div>
      );
    }
  }
