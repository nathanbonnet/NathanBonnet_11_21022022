import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";
import Footer from '../src/components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <div className="content">
      <div className="container">
        <App/>
      </div>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
