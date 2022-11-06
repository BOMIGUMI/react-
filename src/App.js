import logo from './logo.svg';
import './App.css';
// css 파일 불러오기
import './test.css';

function App() {

  const name = '새봄';

  // return 안에 사용자 정의태그 구조를 작성 할 수있다!
  return (
    // JSX문법 : JS와 HTML을 확장시킨 문법(동시사용 가능)
    // 규칙 1 : 꼭 html구조는 한가지 태그로 묶여있어야 한다 -> 빈태그(Forgment)도 가능
    // 규칙 2 : 모든 태그는 여는 태그와 닫는 태그 둘 다 존재해야 함!

    <>
      <h1 className='first'>hello react</h1>
      <h1 style={{color : "pink"}} id='test'>월요일 화이팅 !</h1>
      {/* 변수를 사용할 때는 {변수명} 으로 사용! */}
      {/* name에 있는 값이 새봄 -> 내이름은 새봄 출력, 다른이름이라면 은찬 출력 */}
      <h1>내이름은 {name == '새봄' ? name : '은찬'}</h1>
    </>
  );
}

// App.js를 다른데서 사용할 수 있도록 내보내기
export default App;
