import React from 'react';
import '../components/legalContent/legalContent.scss';
import SubpageHeader from '../components/subpageHeader/SubpageHeader';
import Layout from '../components/layouts/Layout';

const Danke = function() {
  return (
    <Layout pageName="kontakt" title="kontakt title" description="kontakt desc">
        <div className="container">
            <div className="subpage-content-container">
                <div
                    className="blog-container"
                />
                <h1>Danke für deine Anfrage</h1>
                <p>Deine Anfrage ist erfolgreich bei uns eingegangen!</p> 
                <p>Falls du dich für unseren Newsletter eingetragen hast, schaue bitte in dein Postfach nach einer Bestätigungsmail.</p>
                <p>Bestätige diese und Verpasse keine Neuigkeiten von uns.</p>
            </div>
        </div>
    </Layout>
  );
};
export default Danke;