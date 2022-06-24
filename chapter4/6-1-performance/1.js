//컴포넌트의 속성값이나 상태값이 변경되면 리액트는 그 컴포넌트를 다시 그릴 준비를 한다.
//만약 아래처럼 리액트 memo 함수로 감싼 컴포넌트라면 속성값 비교 함수가 호출이 된다.
//속성값 비교 함수는 이전/이후 속성값을 매개변수로 받아서 참 또는 거짓을 반환한다.
//만약 참을 반환하면 이전 렌더링 결과를 재사용한다.
//그렇지 않고 거짓을 반환하면 컴포넌트 함수를 실행해서 가상돔을 업데이트하고 변경된 부분만
//실제 돔에 반영한다.
//만약 isEuqal 같은 속성값 비교 함수를 입력하지 않으면 얕은 비교를 수행하는 기본함수가 사용이 된다.
//컴포넌트를 메모 함수로 감싸지 않았다면 항상 거짓을 반환하는 속성값 비교 함수가 사용된다고 생각할 수 있다.
//이때는 속성값이 변경되지 않아도 부모 컴포넌트가 렌더링이 될 때마다 자기 자신도 렌더링이 된다.
//속성값 비교 함수가 항상 거짓을 반환 하더라도 속성값이 변경되지 않았다면
//실제 돔도 변경되지 않을 것이기 때문에 대부분 문제가 되지는 않는다.
//하지만 렌더링 성능이 중요한 상황에서는
//아래처럼 memo를 이용해서 컴포넌트 함수의 실행과 가상돔의 계산을 생략할 수 있기 때문에
//렌더링 성능상의 이점이 있다.

function MyComponent(props) {
    // ...
}
function isEqual(prevProps, nextProps) {
// true 또는 false를 반환
}
React.memo(MyComponent, isEqual);

