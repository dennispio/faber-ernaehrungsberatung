import React from 'react';
import TextComp from '../components/textComp/TextComp';
import SubpageHeader from '../components/subpageHeader/SubpageHeader';
import Layout from '../components/layouts/Layout';

const Danke = function() {
  return (
    <Layout pageName="kontakt" title="kontakt title" description="kontakt desc">
        <SubpageHeader
            title="Danke"
        />
        <TextComp position="center" title="Deine Anfrage ist erfolgreich bei uns eingegangen"  />
    </Layout>
  );
};
export default Danke;