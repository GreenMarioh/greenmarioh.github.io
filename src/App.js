import React from 'react';
import Banner from './Components/Banner/Banner';
import Introduction from './Components/Introduction/Introduction';

import CVDownload from './Components/CVDownload/CVDownload';
import Tech from './Components/Tech/Tech';
import NonTech from './Components/NonTech/NonTech';
import Connect from './Components/Connect/Connect';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <main>
        <Introduction />
         
        <Tech />
        <NonTech />
        <Connect /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;