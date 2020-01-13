import React from 'react';
import PropTypes from 'prop-types';
import './contactForm.scss';

const ServiceForm = ({ serviceName }) => (
  <div className="container">
    <div className="form-felder row">
      <div className="form-contacthead col-md-8 col-md-offset-2  col-xs-6 col-xs-offset-1">
        <p>Unverbindlich anfragen</p>
      </div>
      <form
        method="POST"
        action="/danke"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="ServiceFormular"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="ServiceFormular" />
        <input
          type="hidden"
          id="form-type"
          name="FormService"
          value={serviceName}
        />
        <input type="hidden" id="form-type" name="emailanfrage" value="ja" />
        <div className="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
          <input type="text" name="Name" required /> <br />
          <label htmlFor="Name">Vollständiger Name</label> <br />
        </div>
        <div className="form-felder-container  col-md-8 col-md-offset-2  col-xs-10 col-xs-offset-1">
          <div className="e-mail-container col-md-6 col-xs-12">
            <input type="email" name="Email" required /> <br />
            <label htmlFor="message">E-Mail</label> <br />
          </div>
          <div className="telefon-container col-md-6 col-xs-12">
            <input type="text" name="Telefon" /> <br />
            <label htmlFor="message">Telefon (optional)</label> <br />
          </div>
        </div>
        <div className="form-felder-container  col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
          <textarea name="message" /> <br />
          <label htmlFor="message">Möchtest Du uns noch etwas mitteilen?</label>
        </div>
        <div className="checkbox-flow col-md-8 col-md-offset-2  col-xs-10 col-xs-offset-1">
          <input type="checkbox" id="mail" name="Mail" value="ja" />
          <label htmlFor="mail">Ich möchte eine Antwort per Mail.</label>
          <input type="checkbox" id="rueckruf" name="Rueckruf" value="ja" />
          <label htmlFor="rueckruf">Ich möchte zurückgerufen werden.</label>
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
export default ServiceForm;

ServiceForm.propTypes = {
  serviceName: PropTypes.string.isRequired,
};
