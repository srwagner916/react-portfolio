import React from 'react'

function Contact() {
  return (
    <section className="flex flex-col">
      <h2 className="mx-auto mt-10 text-5xl">Contact Me</h2>

      <form className="mx-auto w-96">
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl" >Name:</label>
          <input className="bg-blue-50 border-gray-400 focus:ring-yellow-600 focus:border-yellow-600" type="text" name="name" />
        </div>
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl" htmlFor="email">Email address:</label>
          <input className="bg-blue-50 border-gray-400 focus:ring-yellow-600 focus:border-yellow-600" type="email" name="email" />
        </div>
        <div className="grid grid-cols-1   my-5">
          <label className="text-2xl" htmlFor="message">Message:</label>
          <textarea className="bg-blue-50 border-gray-400 focus:ring-yellow-600 focus:border-yellow-600" name="message" />
        </div>
        
          <button className="text-2xl bg-gray-400 w-2/6 border-2 border-yellow-600 hover:bg-yellow-600 hover:border-gray-400 duration-300" type="submit">Submit</button>
        
      </form>
    </section>
  )
}

export default Contact;