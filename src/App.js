import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

function App() {
  const [tabs] = useState([
    {
      name: 'About Me'
    }, 
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact Me'
    },
    {
      name: 'Resume'
    }
  ]);
  
  const renderPage = () => {
    switch (currentTab.name) {
      case 'About Me':
        return <AboutMe/>;
      case 'Portfolio':
        return <Portfolio/>;
      default:
        return <AboutMe/>;
    }
  }

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  console.log(currentTab);

  return (
    <div className>
      <Header
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      >
      </Header>
      {renderPage(currentTab)}
      <Footer />
    </div>
  );
}

export default App;
