import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter,HashRouter } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import store from "./store/store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false} 
          theme="dark"/>
        <App />
      </Provider>
   
  </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
