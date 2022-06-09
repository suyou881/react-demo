/*	1. 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야 한다.*/

//1번 규칙에 의해서 if안에서도, for문 안에서도 사용하면 안된다.
//함수안에서도 훅을 호출하면 안된다.
//왜냐면 함수가 항상 호출된다는 보장이 없기 때문이다.

function MyComponent(){
    const [value,setValue] = useState(0);
    if(value === 0){
        const [v1, setV1] = useState(0);
    }else{
        const [v1, setV1] = useState(0);
        const [v2, setV2] = useState(0);
    }
    // ...
    for (let i=0; i<value; i++){
        const [num, setNum] = useState(0);
    }
    //...
    function func1(){
        const [num, setNum] = useState(0);
    }
    //.....
}