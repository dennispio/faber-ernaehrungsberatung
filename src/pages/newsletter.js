import React from 'react';
import '../components/legalContent/legalContent.scss';
import Layout from '../components/layouts/Layout';
import NewsletterForm  from '../components/contactForm/NewsletterForm';
import BlogContent from '../components/blogContent/BlogContent';


const Newsletterpage = function() {
  return (
    <Layout pageName="newsletter" title="newsletter title" description="newsletter desc">
      <BlogContent title="Website" post="" share={false} blog={false} />
      <NewsletterForm />
    </Layout>
  );
};
export default Newsletterpage;