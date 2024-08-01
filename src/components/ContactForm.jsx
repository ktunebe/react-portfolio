import React from 'react';

export default function ContactForm({
  formState,
  formAlert,
  validEmailAlert,
  handleInputChange,
  handleFormSubmit,
  onFocusChange
}) {

  return (
    <>
      <form className="form p-6 w-9/10 mx-auto" onSubmit={handleFormSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-base md:text-lg">Name</span>
          </div>
          <input
            name="name"
            value={formState.name}
            onBlur={onFocusChange}
            onChange={handleInputChange}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs md:text-lg bg-white text-black"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-base md:text-lg">Email</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              name="email"
              value={formState.email}
              onBlur={onFocusChange}
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="flex-shrink-0 input input-bordered w-full max-w-xs md:text-lg bg-white text-black"
            />
            <p className='flex-shrink-0 text-red-500'>{validEmailAlert}</p>
          </div>
        </label>
        <label className="form-control my-5">
          <div className="label">
            <span className="label-text text-base md:text-lg">Message</span>
          </div>
          <textarea
            name="message"
            value={formState.message}
            onBlur={onFocusChange}
            onChange={handleInputChange}
            className="textarea textarea-bordered h-24 text-base md:text-lg bg-white text-black"
            placeholder="Type Here"></textarea>
        </label>
        <button className="btn rounded-2xl md:text-lg bg-primary text-lightBg hover:text-secondary my-3" type="submit">Submit</button>
      <p className='text-red-500'>{formAlert}</p>
      </form>
    </>
  );
}
