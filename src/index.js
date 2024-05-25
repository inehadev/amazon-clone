// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom'
// import { StateProvider } from './contextApi/StateProvider';
// import  reducer , {  initialState } from './contextApi/reducer';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <StateProvider initialState={initialState} reducer={reducer}>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//     </StateProvider>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './contextApi/StateProvider';
import reducer, { initialState } from './contextApi/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


