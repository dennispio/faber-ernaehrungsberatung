import React from 'react';
import './contactForm.scss';

const NewsletterForm = () => (
  <div className="container newsletter-container">
    <div className="form-felder row">
      <div className="form-contacthead col-md-8 col-md-offset-2  col-xs-10 col-xs-offset-1">
        <h1>Newsletter</h1>
        <p>
          Trage dich jetzt in den Newsletter ein um spannende Tipps und Tricks
          zu erhalten, wie du deine Lebensqualität durch eine gesunde Ernährung
          weiter steigern kannst.
        </p>
      </div>
      <form
        method="GET"
        action="https://wt-0f5b4f9b29f9e05de6df10e225e5a3bd-0.sandbox.auth0-extend.com/webtask_forms"
      >
        <input type="hidden" id="form-type" name="FormService" />
        <div className="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
          <input type="text" name="Email" required /> <br />
          <label htmlFor="Email">E-Mail</label> <br />
        </div>
        <div className="hr-container col-md-8 col-md-offset-2  col-xs-10 col-xs-offset-1">
          <hr />
        </div>
        <div className="checkbox-column col-md-8 col-md-offset-2  col-xs-10 col-xs-offset-1">
          <input
            type="checkbox"
            id="datenschutz"
            name="Datenschutz"
            value="ja"
            required
          />
          <label htmlFor="datenschutz">
            Ich stimme den Datenschutzbestimmungen zu. <br /> Deine Daten werden
            nicht an Dritte weitergegeben.
          </label>
        </div>
        <div className="col-md-3 col-md-offset-2  col-xs-10 col-xs-offset-1">
          <input
            className="input-button"
            type="submit"
            value="Anfrage abschicken"
          />
        </div>
      </form>
    </div>
  </div>
);
export default NewsletterForm;
