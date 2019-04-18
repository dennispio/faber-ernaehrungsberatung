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
                <h1>Danke für deine Anmeldung</h1>
                <p>Vielen Dank das du dich für unsere Produkte interessierst!</p>
            </div>
        </div>
    </Layout>
  );
};
export default Danke;