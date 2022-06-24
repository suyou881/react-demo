/*우리가 key 속성값을 입력하면 리액트는 같은 key를 같는 요소끼리만 비교를 한다.
따라서 리액트는 바나나 요소가 변경되지 않았다는 것을 알 수 잇다.
파인애플 키는 새로 입력됐기 때문에 실제 돔에는 파인애플 요소만 추가된다.
key 속성값은 리액트가 효율적으로 렌더링 할 수 있도록 우리가 제공하는 추가 정보이다.
대부분의 데이터에는 id 값이 있고 그 값을 key 속성값에 입력하는게 좋다.
만약, key 속성값에 입력할만한 값이 없다면?
차선책으로 배열 내에서의 순서 정보를 입력해야 한다.
하지만 배열내에서 원소를 추가,삭제 또는 순서를 변경하는 경우 비효율적으로 렌더링하게 된다.
따라서 key 속성값에 배열의 순서를 입력하는 것은 배열의 끝에서만 우너소를 추가하거나 삭제하면서 
원소의 순서를 변경하지 않는 경우에만 적합하다. 
*/

import React, { useEffect, useState } from 'react';

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag(prev => !prev), 1000);
  });
  if (flag) {
    return (
      <div>
        <p key="apple">사과</p>
        <p key="banana">바나나</p>
      </div>
    );
  } else {
    return (
      <div>
        {/* key 속성값을 이용한 효율적인 렌더링 */}
        <p key="apple">사과</p>
        <p key="pineapple">파인애플</p>
        <p key="banana">바나나</p>
      </div>
    );
  }
}
