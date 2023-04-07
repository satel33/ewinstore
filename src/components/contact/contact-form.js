import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const ContactForm = ({ onSuccess, onError }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })

  const handleInputChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(user.email, {
      FNAME: user.firstName,
      LNAME: user.lastName,
      COMPANY: user.company,
      MESSAGE: user.message,
    }).then(data => {
      if (data.result === "error") {
        onError()
      } else {
        onSuccess()
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form wow fade-in-left delay-09s">
        <div className="row">
          <div className="col-md-6 mb-4">
            <label className="form-label" htmlFor="name">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              onChange={handleInputChange}
              value={user.firstName}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label" htmlFor="last_name">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              onChange={handleInputChange}
              value={user.lastName}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="form-label mb-0" htmlFor="email">
            Email Address <span className="text-danger">*</span>
          </label>
          <div className="form-text mb-3">Where you want us to reply.</div>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            onChange={handleInputChange}
            value={user.email}
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label mb-0" htmlFor="company">
            Company <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            name="company"
            id="company"
            onChange={handleInputChange}
            value={user.company}
            required
          />
        </div>

        <div className="mb-5">
          <label className="form-label" htmlFor="message">
            Message <span className="text-danger">*</span>
          </label>
          <textarea
            className="form-control"
            rows="5"
            name="message"
            id="message"
            onChange={handleInputChange}
            value={user.message}
            required
          ></textarea>
        </div>

        <div className="d-md-flex pt-2 captcha-wrap">
          <div
            className="h-captcha"
            data-sitekey="4afc06a5-ec5b-4904-b8cc-1d2b59bd6e18"
          ></div>
        </div>

        <div className="toast-section text-center my-4"></div>
        <button type="submit" className="button button-primary w-100 py-3">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
