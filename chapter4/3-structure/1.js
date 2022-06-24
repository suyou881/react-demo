function TodoList({ todos }) {
    const [doneList, setDoneList] = useState(todos.filter(item => item.done));
    function onChangeName(key, name) {
      setDoneList(
        //이렇게 자식 컴포넌트에서 부모의 데이터를 별도의 상택밧으로 관리하는것은 좋지 않다.
        //물론 필요한 경우도 있지만 대게 좋지 않다. 
        //상태값은 일부 컴포넌트로 한정해서 관리하는 것이 좋다.
        doneList.map(item => (item.key === key ? { ...item, name } : item)),
      );
    }
    // ...
  }
  