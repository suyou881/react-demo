// 하나의 화면을 표현하기 위해서 여러 개의 리액트 요소가 트리 구조로 구성이 된다.
// 리액트에서 데이터 변경에 의한 화면 업데이트는 랜더 단계와 커밋 단계를 거친다.
//랜더 단계는 실제 돔에 반영할 변경사항을 파악하는 단계
//커밋 단계는 파악된 변경 사항을 실제 돔에 반영하는 단계
//랜더 단계에서는 변경 사항을 파악하기 위해서 가상 돔을 이용한다.
//가상 돔은 리액트 요소로부터 만들어진다.
//리액트는 랜더링을 할 때마다 가상 돔을 만들고 이전의 가상 돔과 비교를 한다.
//이는 실제 돔의 변경 사항을 최고화하기 위한 과정이다.


function Todo({title, desc}){
    const [priority, setPriority] = useState('high');
    function onClick(){
        setPriority(priority === 'high' ? 'low' : 'high');
    }
    return (
        <div>
            <Title title={title}/>
            <p>{desc}</p>
            <p>{priority === 'high' ? '우선순위 높음' : '우선순위 낮음'}</p>
            <button onClick={onClick}>우선순위 변경</button>
        </div>
    );
}

//Title 컴포넌트는 memo 함수를 사용했기 때문에 
//title 속성값이 변경될 때만 렌더링 된다.
const Title = React.memo(({title})=>{
    return <p style={{color: 'blue'}}>{title}</p>;
});

//랜더 단계는 랜더함수를 호출하거나
//컴포넌트 내부에서 상태값 변경 함수를 호출해서 시작될 수 있다.
ReactDOM.render(
    <Todo title="리액트 공부하기" desc="실전 리액트 프로그래밍을 공부한다."/>,
    document.getElementById('root')
)