import React from 'react';
import '../components/legalContent/legalContent.scss';
import Layout from '../components/layouts/Layout';
import NewsletterForm from '../components/contactForm/NewsletterForm';

const Newsletterpage = function() {
  return (
    <Layout pageName="newsletter" title="newsletter title" description="newsletter desc">
      <NewsletterForm />
    </Layout>
  );
};
export default Newsletterpage;