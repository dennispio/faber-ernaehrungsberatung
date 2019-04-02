import React from 'react';
import './contactForm.scss';

const ContactForm = () => (
    <div className="form-felder row">
        <div className="form-contacthead col-md-8 col-md-offset-2  col-xs-6 col-xs-offset-1">
            <p> <b>Unverbindlich Anfragen</b></p>
        </div>
        <form method="POST" action="https://formspree.io/hello@immajung.de">
            <div className="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
                <input type="text" name="Name" /><br />
                <label>Vollständiger Name</label><br />
            </div>
            <div className="form-felder-container  col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
                <input type="text" name="Straße" /><br />
                <label>Straße und Hausnummer (optional)</label><br />
            </div>
            <div className="form-felder-container  col-md-8 col-md-offset-2  col-xs-10 col-xs-offset-1">
                <div className="e-mail-container col-md-6 col-xs-12">
                    <input type="email" name="Email" /><br />
                    <label>E-Mail</label><br />
                </div>
                <div className="telefon-container col-md-6 col-xs-12">
                    <input type="text" name="Telefon" /><br />
                    <label>Telefon (optional)</label><br />
                </div>
            </div>
            <div className="form-felder-container  col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
                <textarea name="message" /><br />
                <label>Möchtest Du uns noch etwas mitteilen?</label>
            </div>
            <div className="checkbox-flow col-md-8 col-md-offset-2  col-xs-10 col-xs-offset-1">
                <input type="checkbox" id="mail" name="Mail" value="ja" />
                <label for="mail">Ich möchte eine Antwort per Mail.</label>
                <input type="checkbox" id="rueckruf" name="Rueckruf" value="ja" />
                <label for="rueckruf">Ich möchte zurückgerufen werden.</label>
            </div>
            <div className="checkbox-column col-md-8 col-md-offset-2  col-xs-10 col-xs-offset-1">
                <input type="checkbox" id="datenschutz" name="Datenschutz" value="ja" />
                <label for="datenschutz">Ich stimme den Datenschutzbestimmungen zu. <br /> Deine Daten werden nicht an Dritte weitergegeben.</label>
                <input type="checkbox" id="newsletter" name="Newsletter" value="ja" />
                <label for="newsletter">Ich möchte den Newsletter erhalten. <br /> Jederzeit abstellbar.</label>
            </div>
            <div className="col-md-3 col-md-offset-2  col-xs-10 col-xs-offset-1">
                <input className="input-button" type="submit" value="Anfrage abschicken" />
            </div>
        </form>

        <form method="POST" action="https://formspree.io/hello@immajung.de">
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Test Message"></textarea>
            <button type="submit">Send Test</button>
        </form>
    </div >
)

export default ContactForm;