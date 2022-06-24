//propTypes로 속성값 타입을 입력할 수 있다.
//prop-types라는 패키지가 있는데 이것을 이요해서 타입정보를 입력할 수 있다.
//이 prop-types 패키지는 속성값의 타입 정보를 정의할 때 사용하는 리액트 공식 패키지이다.
//타입은 왜 중요한가??
//자바스크립트는 동적언어인데, 타입을 미리 정의해 놓는것이 좋다.
//타입 정의 자체가 훌륭한 문서가 된다.
User.propTypes={};

//여기에서 보면 속성값이 어떤 타입인지 알기 굉장히 어렵다.
export default function User({ type, age, male, onChangeName, onChangeTitle }) {
    function onClick1() {
      const msg = `type: ${type}, age: ${age ? age : '알 수 없음'}`;
      log(msg, { color: type === 'gold' ? 'red' : 'black' });
      // ...
    }
    function onClick2(name, title) {
      if (onChangeName) {
        onChangeName(name);
      }
      onChangeTitle(title);
      male ? goMalePage() : goFemalePage();
      // ...
    }
    // ...
    return null;
  }
  