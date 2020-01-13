import React, { useState } from 'react';
import './contactForm.scss';
import axios from 'axios';

function ContactForm() {
  // const formchecker = e => {
  //   alert('dasdasdasdasdas');
  //   alert(e.target.Name.value);
  //   console.log(e.target.Name.value);
  //   console.log(e.target.Name.value);
  //   console.log(e.target.Name.value);
  //   console.log(e.target.Straße.value);
  //   console.log(e.target.Email.value);
  //   console.log(e.target.message.value);
  //   console.log(e.target.Mail.value);
  //   console.log(e.target.Telefon.value);
  //   console.log(e.target.Rueckruf.value);
  //   console.log(e.target.Datenschutz.value);
  //   console.log(e.target.Newsletter.value);
  //   e.preventDefault();

  //   axios
  //     .get(
  //       'https://wt-0f5b4f9b29f9e05de6df10e225e5a3bd-0.sandbox.auth0-extend.com/faber-webhook',
  //       {
  //         params: {
  //           Name: e.target.Name.value,
  //           Straße: e.target.Straße.value,
  //           Email: e.target.Email.value,
  //           message: e.target.message.value,
  //           Mail: e.target.Mail.value,
  //           Telefon: e.target.Telefon.value,
  //           Rueckruf: e.target.Rueckruf.value,
  //           Datenschutz: e.target.Datenschutz.value,
  //           Newsletter: e.target.Newsletter.value,
  //           FormService: e.target.FormService.value,
  //         },
  //       }
  //     )
  //     .then(function(response) {
  //       console.log(response);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     })
  //     .finally(function() {});
  // };

  return (
    <div className="container">
      <div className="form-felder row">
        <div className="form-contacthead col-md-8 col-md-offset-2  col-xs-6 col-xs-offset-1">
          <p>Unverbindlich anfragen</p>
        </div>
        <form
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
          // action="https://wt-0f5b4f9b29f9e05de6df10e225e5a3bd-0.sandbox.auth0-extend.com/faber-webhook"
          // onSubmit={formchecker}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="hidden"
            id="form-type"
            name="FormService"
            value="KontaktFormular"
          />
          <input type="hidden" id="form-type" name="emailanfrage" value="ja" />
          <div className="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
            <input type="text" name="Name" required /> <br />
            <label htmlFor="Name">Vollständiger Name</label> <br />
          </div>
          <div className="form-felder-container  col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
            <input type="text" name="Straße" s /> <br />
            <label htmlFor="Straße">
              Straße und Hausnummer (optional)
            </label>{' '}
            <br />
          </div>
          <div className="form-felder-container  col-md-8 col-md-offset-2  col-xs-10 col-xs-offset-1">
            <div className="e-mail-container col-md-6 col-xs-12">
              <input type="email" name="Email" required /> <br />
              <label htmlFor="Email">E-Mail</label> <br />
            </div>
            <div className="telefon-container col-md-6 col-xs-12">
              <input type="text" name="Telefon" /> <br />
              <label htmlFor="Telefon">Telefon (optional)</label> <br />
            </div>
          </div>
          <div className="form-felder-container  col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
            <textarea name="message" /> <br />
            <label htmlFor="message">
              Möchtest Du uns noch etwas mitteilen?
            </label>
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
              Ich stimme den Datenschutzbestimmungen zu. <br /> Deine Daten
              werden nicht an Dritte weitergegeben.
            </label>
            <input
              type="checkbox"
              id="newsletter"
              name="Newsletter"
              value="ja"
            />
            <label htmlFor="newsletter">
              Ich möchte den Newsletter erhalten. <br /> Jederzeit abstellbar.
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
}
export default ContactForm;
