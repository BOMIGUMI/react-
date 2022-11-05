import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// App.js에서 App이라는 사용자정의태그(컴포넌트)를 불러와 여기에서 사용하겠다.
import App from './App';
import reportWebVitals from './reportWebVitals';

// document.getElementById('root') => document에서 id가 root인것을 가져오기
  // ㄴ> html에 있던 <div id="root"></div> 가져와서 ReactDOM이라는 녀석을 만들어줄것이다.
  // ReactDOM.createRoot 가 html을 불러온다고 생각하면 된다.
const root = ReactDOM.createRoot(document.getElementById('root'));
// React.StrictMode : 안전장치 
// 여러가지 태그들을 App이라는 이름으로 정의되어있음 -> App.js에 정의되어 있음
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
