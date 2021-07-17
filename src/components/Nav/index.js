import React from 'react';

function Nav(props) {
  const {
    tabs = [],
    setCurrentTab,
    currentTab
  } = props;
  
  console.log(tabs);

  return (
      <nav className="inline-flex">
        <ul className="inline-block">
          {tabs.map((tab) => (
            <li 
              className={`inline mx-10 text-xl ${currentTab.name === tab.name && 'text-blue-600'}`}
              key={tab.name}
            >
              <span
                onClick={() => { setCurrentTab(tab) }}  
              >{tab.name}</span>
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default Nav;