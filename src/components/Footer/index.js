import React from 'react';

function footer() {
  return (
    <footer className="flex h-40 fixed bottom-0 w-full justify-center items-center bg-gray-400">
      <div className="text-5xl">
        <a href="https://github.com/srwagner916" target="_blank" title="github profile" rel="noreferrer" className="mx-4">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/shay-wagner-067416206/" target="_blank" title="linkedIn profile" rel="noreferrer" className="mx-4">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  )
}

export default footer;