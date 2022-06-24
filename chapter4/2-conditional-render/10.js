//지금 students 변수의 타입는 배열
//undefined가 가능한 변수는 앞에 검사하는 코드가 필요하다.
//그래서 가능하다면 기본 값으로 undefined가 아니라
//빈 배열을 넣어주는게 좋다. 그러면 체크하는 코드가 필요 없으니까
<div>{students && students.map(/* */)}</div>;
