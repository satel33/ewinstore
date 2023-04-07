import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const SubscribeForm = ({ onSuccess, onError }) => {
  const [email, setEmail] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email).then(data => {
      if (data.result === "error") {
        onError()
      } else {
        onSuccess()
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="_token"
        type="hidden"
        value="OybwVxtwu1LBb2057zYDuMxm3gWzrEET12nksGXv"
      />
      <div className="subscribe-field">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit" className="button button-white">
          Subscribe
        </button>
      </div>
      {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="subsCheck"
                        required=""
                      />
                      <label className="form-check-label" htmlFor="subsCheck">
                        I have read, agree and accept that the information that
                        I provide will be used as detailed in the{" "}
                        <a href="privacy-policy.html" target="_blank">
                          Privacy Policy.
                        </a>
                      </label>
                    </div> */}
    </form>
  )
}

export default SubscribeForm
