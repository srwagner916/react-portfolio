import React from 'react';

function Project(props) {
  
  const { projects, index } = props;

  function hoverEnterHandler(e) {
    // finds text-opacity-0 class in project divs and removes it displaying the link text
    e.target.className = e.target.className.replace( /(?:^|\s)text-opacity-0(?!\S)/g , '' )
    // e.target.className += " bg-blend-luminosity"
  }
  // adds the text-opacity-0 class to the project divs hiding the link text
  function hoverLeaveHandler(e) {
    e.target.className += " text-opacity-0"
    // e.target.className = e.target.className.replace( /(?:^|\s)bg-blend-luminosity(?!\S)/g , '' )


  }

  return(
    <>
      <div 
        className={`flex bg-cover bg-${projects[index].image} justify-center items-center text-black text-opacity-0 hover:bg-yellow-600 duration-500 bg-blend-luminosity`}
        onMouseEnter={  hoverEnterHandler }
        onMouseLeave={ hoverLeaveHandler }
      >
        <a href={`${projects[index].deployed}`}>
          <h3 >{`${projects[index].name}`}</h3>
        </a>
        <a href={`${projects[index].github}`} target="_blank" title="Link to GitHub repo" rel="noreferrer" className="align-middle justify-center">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </>

  )
}

export default Project;