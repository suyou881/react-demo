import { useState, useEffect } from "react";

//앞에서도 언급했지만 가능하다면 의존성 배열을 사용하지 않는 것이 좋다.
//의존성 배열을 관리하는데 생각보다 많은 시간과 노력이 들어가기 때문이다.
//특히 속성값으로 전달되는 함수를 의존성 배열에 넣는 순간
//그 함수는 부모 컴포넌트에서 useCallback 등을 사용해서 
//자주 변경되지 않도록 신경써서 관리해줘야 한다.
//의존성 배열을 사용하지 않는 대신 부수효과 함수 내에서 실행 시점을 조절할 수 잇다.
//이렇게 부수효과 함수 내에서 처리를 하면 
//부수효과 함수 내의 모든 변수는 최신화된 값을 참조하므로 안심할 수 있다.
//fetchAndSetUser 함수는 useCallback 같은 함수를 사용하지 않아도 괜찮아 진것이다.
export default function Profile({ userId }) {
  const [user, setUser] = useState();
  async function fetchAndSetUser(needDetail) {
    const data = await fetchUser(userId, needDetail);
    setUser(data);
  }
  useEffect(() => {
    if (!user || user.id !== userId) {
      fetchAndSetUser(false);
    }
  });
  // ...
}
