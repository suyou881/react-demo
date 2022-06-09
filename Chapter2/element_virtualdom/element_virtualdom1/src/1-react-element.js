//리액트는 가상돔을 이용한다.
//브라우저에서 돔을 변경하는 것은 비교적 오래걸리는 작업이다.
//따라서 빠른 렌더링을 위해서 돔 변경을 최소화하는 것이 좋다. 
//리액트는 메모리에 가상돔을 올려 놓고 
//이전과 이후를 비교한다.
//그래서 변경된 부분만 실제 돔에 반영하는 전략을 채택했다.

const element = <a href="http://google.com">click here</a>
const element1 = React.createElement(
    'a',
    {href: 'http://google.com'},
    'click here'
);