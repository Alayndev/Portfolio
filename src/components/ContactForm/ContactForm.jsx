// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";

import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xoqrarlv");

  if (state.succeeded) {
    return (
      <div className='home'>
        <div className='content'>
          <h3>Thank you for contacting me!</h3> <span>I will reply ASAP!</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='inputBox'>
        <input id='name' type='text' name='name' placeholder='Full Name' />
        <ValidationError prefix='Name' field='name' errors={state.errors} />

        <input id='email' type='email' name='email' placeholder='Email' />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>

      <div className='inputBox'>
        <input id='subject' type='text' name='subject' placeholder='Subject' />
        <ValidationError
          prefix='Subject'
          field='subject'
          errors={state.errors}
        />

        <input id='company' type='text' name='company' placeholder='Company' />
        <ValidationError
          prefix='Company'
          field='company'
          errors={state.errors}
        />
      </div>

      <textarea id='message' name='message' placeholder='Message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />

      <button type='submit' className='btn' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
