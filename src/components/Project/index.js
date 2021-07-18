import React from 'react';

function Project(props) {
  
  const { projects, index } = props;

  // function hoverEnterHandler(e) {
  //   // finds text-opacity-0 class in project divs and removes it displaying the link text
  //   e.target.className = e.target.className.replace( /(?:^|\s)text-opacity-0(?!\S)/g , '' )
  // };
  // // adds the text-opacity-0 class to the project divs hiding the link text
  // function hoverLeaveHandler(e) {
  //   e.target.className += " text-opacity-0"
  // };

  return(
    <>
      <div 
        className={
          //maybe bg-blend-saturation
          `grid 
           grid-cols-3 
           bg-cover 
           bg-${projects[index].image}
           place-items-start
           text-gray-800
           text-opacity-0
           hover:bg-yellow-500
           hover:text-opacity-100
           duration-500
           bg-blend-soft-light
           border-4
           border-yellow-600`
        }
        // onMouseEnter={  hoverEnterHandler }
        // onMouseLeave={ hoverLeaveHandler }
      >

        <a className="mx-10 col-span-2" href={`${projects[index].deployed}`}>
          <h3 >{`${projects[index].name}`}</h3>
        </a>
        <a className="mx-10" href={`${projects[index].github}`} target="_blank" title="Link to GitHub repo" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <span className="col-span-2 text-3xl mx-10">{`${projects[index].topic}`}</span>
      </div>
    </>

  )
}

export default Project;