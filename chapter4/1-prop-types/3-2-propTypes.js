import PropTypes from 'prop-types';

//여기서 한가지 부족한 타입 정보는 onChangeName과 같은 함수의 타입이다.
//함수의 매개변수라던가 반환값에 대한 타입 정보가 보이지 않는다.
//propTypes 패키지만으로는 함수의 자세한 타입을 정리할 수 없기 때문에
//이럴 때는 주석으로 자세한 타입을 적어주는게 좋다.
User.propTypes = {
  male: PropTypes.bool.isRequired,
  age: PropTypes.number,
  type: PropTypes.oneOf(['gold', 'silver', 'bronze']),
  onChangeName: PropTypes.func, // (name: string) => void
  onChangeTitle: PropTypes.func.isRequired,
};

export default function User({ type, age, male, onChangeName, onChangeTitle }) {
  function onClick1() {
    const msg = `type: ${type}, age: ${age ? age : '알 수 없음'}`;
    console.log(msg, { color: type === 'gold' ? 'red' : 'black' });
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

function goMalePage() {}
function goFemalePage() {}


// import './App.css';
// import User from './User';

// function App() {
//     return (
//       <>
//         <p>실전 리액트</p>
//         {/* <User/> 컴포넌트만 사용할 경우 required 속성값에서 에러 발생한다.*/}
//         {/* 아래 age 100을 입력하면 조건에서 맞지 않기때문에 에러 발생된다. */}
//         <User onChangeTitle={()=>{}} male={true} age={100}/>
//       </>
//     );
//   }
  
//   export default App;