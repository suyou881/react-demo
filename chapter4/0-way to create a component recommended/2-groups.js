//컴포넌트 내부에서 서로 연관된 코드는 한곳에서 모아서 관리하는 것이 좋다.
//useState와 useEffect 끼리 묶어서 관리하는 사람도 있지만,
//서로 연관 코드끼리 모아서 관리하는게 가독성이 더 좋다.
//그리고 이렇게 모아놓으면 별도로 커스텀 훅으로 분리하기도 편하다

function Profile({ userId }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUserApi(userId).then(data => setUser(data));
    }, [userId]);

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const onResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }, []);
    // ...
  }
  