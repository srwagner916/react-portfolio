import React, { useState } from 'react';
import { validateEmail } from '../../utils/validateEmail';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');
  // sets error message if no invalid fields sets form data
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }



  return (
    <section className="flex flex-col my-auto">
      <h2 className="font-serif mx-auto mt-10 text-5xl">Contact Me</h2>

      <form className="font-sans mx-auto w-96" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl" >Name:</label>
          <input className="bg-blue-50 border-gray-400 focus:ring-yellow-600 focus:border-yellow-600" type="text" name="name" defaultValue={name} onBlur={handleChange}/>
        </div>
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl" htmlFor="email">Email address:</label>
          <input className="bg-blue-50 border-gray-400 focus:ring-yellow-600 focus:border-yellow-600" type="email" name="email" defaultValue={email} onBlur={handleChange}/>
        </div>
        <div className="grid grid-cols-1 my-5">
          <label className="text-2xl" htmlFor="message">Message:</label>
          <textarea className="bg-blue-50 border-gray-400 focus:ring-yellow-600 focus:border-yellow-600" name="message" defaultValue={message} onBlur={handleChange}/>
        </div>
        {errorMessage && (
          <div className="mb-5">
            <span className="text-2xl">{errorMessage}</span>
          </div>
        )} 
          <button className="font-sans text-gray-800 text-2xl bg-gray-400 w-2/6 border-2 border-yellow-600 hover:bg-yellow-600 hover:border-gray-400 duration-300" type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Contact;