import React from 'react';
import Section1_Header from './component/Section1_Header';
import "../src/App.css";
import Main from './pages/Main';

function App() {
  return (
    <div className='main mainflex'>
        <Section1_Header />
      <div className='test flex box'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
