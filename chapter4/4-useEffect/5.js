//부수효과 함수를 async 와 await를 이용해서 만들면 문제가 된다.
//부수효과 함수의 반환값은 항상 함수 타입이어야 하기 때문이다.

// useEffect(async() => {
//     const data = await fetchUser(userId);
//     setUser(data);
// }, [userId]);


//그래서 async await을 사용하고 싶다면 함수를 하나 만들어서 호출해 주는 방식을 사용해야 한다.
useEffect(() => {
    async function fetchAndSetUser() {
      const data = await fetchUser(userId);
      setUser(data);
    }
    fetchAndSetUser();
  }, [userId]);
  