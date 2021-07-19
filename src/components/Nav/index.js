import React from 'react';

function Nav(props) {
  const {
    tabs = [],
    setCurrentTab,
    currentTab
  } = props;
  
  return (
      <nav className="inline-flex">
        <ul className="xs:text-2xl xs:flex xs:flex-col md:flex-row lg:text-3xl text-gray-800 inline-block">
          {tabs.map((tab) => (
            <li 
              className={`xs:my-1 cursor-pointer inline mx-10 ${currentTab.name === tab.name && 'text-yellow-600'}`}
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