function Parent({ user }) {
    return (
      <div>
        <p>Parent</p>
        <Child user={user} />
        {/* Child에서 하는 조건부 검사를 부모 컴포넌트에서 해줄 수 있다.
        여기서 조심할 점은 user 데이커상태에 따라서 child 컴포넌트가
        mount와 unmount를 반복할 수도 있다.
        이게 의도적인 것이라면 상관 없는데 의도되지 않은 것이라면
        user 상태값이 초기화 되서 문제가 될 수도 있다. */}
        {user && <Child user={user} />}
      </div>
    );
  }
  
  function Child({ user }) {
    const [v, setV] = useState(0);
    //user 데이터가 없을 때는 아무것도 렌더링 하지 않는다.
    if (user) {
      return null;
    }
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.phone}</p>
      </div>
    );
  }
  