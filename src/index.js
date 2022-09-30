import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Gavency/Gavency-Regular.otf';
import './fonts/Gavency/Gavency-Regular.ttf';
import './fonts/Nighty/NightyOTF.otf';
import './fonts/Nighty/NightyTTF.ttf';
import './fonts/Nighty/NightyWOFF.woff';
import '@splidejs/splide/css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
