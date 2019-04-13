import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout';
import '../constants/style/ueberuns.scss';

const Ueberuns = props => {
    const { data } = props;
    
    return (
      <Layout  pageName="ueberuns"
      title="uberuns title"
      description="ueberuns desc">
       <div id="ueberunsContainer" className="container-full">

        <h>text zum guckdn</h>
       </div>
       <div id="containerText">

       </div>
      </Layout>
    );
  };
  export default Ueberuns;