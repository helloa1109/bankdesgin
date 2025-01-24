import React from 'react';
import Section1_Header from './component/Section1_Header';
import { Section1_Wrapper } from './style/Section1Main';
import { Section1_Wrapper2 } from './style/Section2Main';
import Section1 from './component/Section1';
import Section2 from './component/Section2';

function App() {
  return (
    <div className="App">
      <Section1_Header/>
      <Section1/>
      <Section2/>
    </div>
  );
}

export default App;
