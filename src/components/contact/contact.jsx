import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layouts/Layout';
import SubpageHeader from '../subpageHeader/SubpageHeader';
import ContactForm from '../contactForm/ContactForm';

import './contact.scss';

const Contact = () => (
    <Layout
        pageName="kontakt" title="kontakt title" description="kontakt desc">
        <SubpageHeader title="Kontakt"
            text={["Ernährungsberatung faber GbR", <br />,
                " Walsroder Straße 123 B", <br />,
                "30853 Langenhagen ", <br />, <br />,
                "Telefon: +49 157 85624045", <br />,
                "Mail: kontakt@ernaehrungsberatung-faber.de", <br />,
                "Auf Wunsch auch über Skype erreichbar"]}
        />
        <div className="button-container">
            <div className="button">
                <a href="mailto:Kontakt@ernaehrungsberatung-faber.de?subject=Ernährungsberatung"><button>E-Mail</button></a>
            </div>
            <div className="button">
                <a href="tel:+4915785624045"><button>Telefon</button></a>
            </div>
        </div>
        <ContactForm />
    </Layout >
)


export default Contact;

Contact.propTypes = {
    pageName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};