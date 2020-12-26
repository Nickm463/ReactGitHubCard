import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App title="The GitHub Cards App" />
  </React.StrictMode>,
  document.getElementById('root')
);


// const render =()=> {
//   ReactDOM.render(
//     React.createElement(
//       "div",
//       null,
//       "Hello React",
//       React.createElement('input',null),
//       React.createElement('pre',null,(new Date).toLocaleTimeString())
//       ),
//     document.getElementById('reactprac')
//   );
//   //htmlprac
  
//   document.getElementById('htmlprac').innerHTML=
//   `<div>
//     Hello HTML
//     <input></input>
//     <pre>${(new Date).toLocaleTimeString()}</pre>
//     </div>`;
// }

// setInterval(render,1000);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
