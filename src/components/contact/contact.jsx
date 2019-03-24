import React from 'react';
import morpheins from '../../img/bubbles/FBR-Website-Bubbles_Lei_Ref_Blog_Kon-1.svg';
import morphzwei from '../../img/bubbles/FBR-Website-Bubbles_Lei_Ref_Blog_Kon-2.svg';
import './contact.scss';

const Contact = () => {
    return (
        <div className="row contact-container">
            <div className="morph-Container"> <img src={morpheins}></img> </div>
            <div className="morphzwei-Container"> <img src={morphzwei}></img> </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 contact-heading">
                <h1>Kontakt</h1>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 contact-paragraph ">
                <p>Ernährungsberatung faber GbR <br />
                    Walsroder Straße 123 B <br />
                    30853 Langenhagen <br /> <br />
                    Telefon: +49 157 85624045 <br />
                    Mail: kontakt@ernaehrungsberatung-faber.de <br />
                    Auf Wunsch auch über Skype erreichbar</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 button-container">
                <div className="button">
                    <a href="mailto:Kontakt@ernaehrungsberatung-faber.de?subject=Ernährungsberatung"><button>E-Mail</button></a>
                </div>
                <div className="button">
                    <a href="tel:+4915785624045"><button>Telefon</button></a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-container">
                <h3>unverbindlich Anfragen</h3>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-felder">
                <form>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-felder-ein">
                        <input type="text" /><br />
                        <label>Vollständiger Name</label><br />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-felder-ein">
                        <input type="text" /><br />
                        <label>Vollständiger Name</label><br />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-felder-ein">
                        <input type="text" /><br />
                        <label>Vollständiger Name</label><br />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-felder-ein">
                        <input type="text" /><br />
                        <label>Vollständiger Name</label><br />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-felder-ein">
                        <textarea></textarea><br />
                        <label>Möchtest Du uns noch etwas mitteilen?</label>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <input className="input-button" type="submit" value="Submit" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <label><input type="checkbox" /> Ich möchte eine Antwort per Mail.</label>
                        <label><input type="checkbox" />Ich möchte zurückgerufen werden.</label>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Contact;