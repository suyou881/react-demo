import React, {useState} from 'react';

export default function App() {
  //상태값으로 todoList를 가지고 있다.
  //useState를 호출하면 컴포넌트에 상태값을 추가할 수 있다.
  //useState의 매개변수는 상태값의 초기값을 의미한다.
  //여기서는 빈 배열을 초기값으로 넣었다. ustState는 배열을 반환한다.
  //배열의 첫번째 아이템은 상태값이고, 두번재 아이템은 상태값 변경함수이다.
  //상태값 변경함수를 이용해서 상태값이 변경되면 리액트는 자동으로 UI를 변경해준다.
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  //여기서 desc는 input에서 관리가 되어야 한다.
  const [desc, setDesc] = useState('');
  const [showOdd, setShowOdd] = useState(false);
  function onAdd(){
    const todo={id:currentId, desc};
    setCurrentId(currentId+1);
    setTodoList([...todoList, todo]);
  }
  function onDelete(e){
    const id=Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo=>todo.id!==id);
    setTodoList(newTodoList);
  }
  function onSaveToServer(){}
  return (
    <div >
      <h3>할 일 목록</h3>
      <ul>
        {/* 변수를 사용하려면 {} 를 열어야 한다. 
        todo 데이터를 기반으로 렌더링을 한다.*/}
        {todoList.filter((_, index)=>(showOdd ? index %2 === 0 : true)).map(todo=>(
          //중요
          //jsx에서 배열을 표현할 때는 항상 key를 입력해주는게 좋다.
          //그래야만 리액트가 화면을 좀 더 효율적으로 업데이트 할 수 있다.
          <li key={todo.id}>
            <span>{todo.desc}</span>
            <button data-id={todo.id} onClick={onDelete}>삭제</button>
          </li>
          )
        )}
      </ul>
      <input type="text" value={desc} onChange={e=>setDesc(e.target.value)}/>
      <button onClick={onAdd}>추가</button>
      <button onClick={()=>setShowOdd(!showOdd)}>
        홀수 아이템만 보기 on/off
        </button>
      <button onClick={onSaveToServer}>서버에 저장</button>
    </div>
  );
}