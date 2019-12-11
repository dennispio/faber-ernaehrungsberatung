import React from "react";
import "../components/legalContent/legalContent.scss";
import Layout from "../components/layouts/Layout";
import NewsletterForm from "../components/contactForm/NewsletterForm";

const Newsletterpage = function() {
  return (
    <Layout
      pageName="newsletter"
      title="Faber Ernährungsberatung Hannover | Newsletter"
      description="Das ist die Newsletter-Seite der Faber Ernährungsberatung"
    >
      <NewsletterForm />
    </Layout>
  );
};
export default Newsletterpage;
