//사실 우리가 useState에 전달한 정보는 기본값 밖에 없다.
//useEffect도 마찬가지다.
//그래서 리액트 입장에서는 순서 정보를 가지고
//첫번째 useState와 두번째 useState를 구분한다.
//그래서 순서 정보가 중요하다.

function Profile(){
    const [name, setName] = useState('mike');
    const [country, setCountry] = useState('korea');
    //...
}