import * as React from "react"

const Newsletter = () => {
  return (
    <section className="newsletter-canvas">
      <div className="container">
        <div className="newsletter">
          <div className="newsletter-inner">
            <div className="subscribe wow fade-in-right delay-05s">
              <div className="subscribe-inner">
                <div className="intro">
                  <h3>Stay up to date with Hanshow!</h3>
                  <p>Subscribe to our Newsletter and never miss an update.</p>
                </div>
                <form
                  method="POST"
                  action="submit-subscribe.html"
                  acceptCharset="UTF-8"
                >
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
                    />
                    <button
                      datacallback="subscribeSubmit"
                      className="h-captcha"
                      datasitekey="4afc06a5-ec5b-4904-b8cc-1d2b59bd6e18"
                    >
                      Subscribe
                    </button>
                    <button
                      type="submit"
                      id="subscribe-submit-form"
                      className="button button-white d-none"
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="subsCheck"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="subsCheck">
                      I have read, agree and accept that the information that I
                      provide will be used as detailed in the{" "}
                      <a href="privacy-policy.html" target="_blank">
                        Privacy Policy.
                      </a>
                    </label>
                  </div>
                </form>
                <p>
                  *We will only share recent news, developments and
                  opportunities and will not share your email address with any
                  third parties.
                </p>
              </div>
            </div>
            <div className="contact wow fade-in-left delay-03s">
              <div className="intro">
                <div className="intro-inner">
                  <h3>Ready to Reimagine your Retail Experience?</h3>

                  <p>Get in touch with Hanshow to find out how.</p>
                  <a href="contact.html" className="button button-white">
                    Contact ⟶
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
