import React from 'react';

function Project(props) {
  
  const { projects, index } = props;

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
           font-serif
           hover:bg-yellow-500
           hover:text-opacity-100
           duration-500
           bg-blend-soft-light
           border-4
           border-yellow-600`
        }
      >

        <a className="mx-10 mt-5 col-span-2 transform duration-100 hover:scale-110" href={`${projects[index].deployed}`}>
          <h3 >{`${projects[index].name}`}</h3>
        </a>
        <a className="mx-10 mt-5 transform duration-300 hover:scale-110" href={`${projects[index].github}`} target="_blank" title="Link to GitHub repo" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <span className="col-span-2 text-3xl mx-10">{`${projects[index].topic}`}</span>
      </div>
    </>

  )
}

export default Project;