/*이전/이후 속성값을 갖고 있을 때, 속성값이 변경됐는지 어떻게 판단할 수 있을까??
가장 무시한 방법은 모든것을 비교하는것. 하지만 이 방식은 성능에 좋지 않다.
한번에 알아낼 수 있는 방법이 있따.
객체를 불변 객체로 관리하는 것이다. 데이터를 분변 데이터로 관리하면
이전/이후 값의 단순 비교값으로 컴포넌트의 속성값이 변경됐는지 알 수 있다.
따라서 상태값을 불변 상태로 관리하면 렌더링 성능에 큰 도움이 된다.*/

const prevProps = {
    todos: [
      { title: 'fix bug', priority: 'high' },
      { title: 'meeting with jone', priority: 'low' },
      // ...
    ],
    friends: []
  };
  const nextProps = {
    todos: [
      { title: 'fix bug', priority: 'high' },
      { title: 'meeting with jone', priority: 'high' },
      // ...
    ],
    friends: []
  };
  
  prevProps.todos === nextProps.todos;

//불변객체에 뭔가를 추가 하고 싶다면 push가 아니라 새로운 객체를 만드는 것이다.
//그래서 불변으로 관리하면 간단하게 데이터가 변경됐는지 아닌지를 알 수 있다.
//예를 들어 위에서는 priority가 변경됐는데,
//그렇게 되면 그걸 감싸고 있는 객체의 레퍼런스도 변경되고 
//그 부모인 배열의 레퍼런스도 변경이 된다. 따라서 간단하게 비교가 가능하다.
const prevTodos=[1,2,3];
const nextTodos=[...prevProps, 4];


//리액트에서 사용하는 얕은 비교
//리액트에서의 얕은 비교는 그 안에 있는 속성값끼리 비교를 하는것이다.
const isEqual = prevProps.todos === nextProps.todos && prevProps.friends === nextProps.friends;