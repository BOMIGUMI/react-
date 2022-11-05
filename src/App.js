import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // JSX문법 : JS와 HTML을 확장시킨 문법(동시사용 가능)
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// App.js를 다른데서 사용할 수 있도록 내보내기
export default App;
