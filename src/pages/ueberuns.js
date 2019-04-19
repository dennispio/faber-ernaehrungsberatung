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
      <div className="container-full ueberUnsContainer">
       <div id="ueberunsContainerImg" />   
       <div className="container ueberUnsContent">
        <div className="titelUber"> 
            <h1 className="texttitel">Ueber Uns</h1>
        </div>
            <div className="row">
            
                <div className="col-xs-12 col-sm-6 col-lg-5 ">
                <h2 className="titelzwei">Unsere Entstehung und Philosophie</h2>
                  <p className="textUber">text um zu sehen was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier 
                      stehen kanntext um zu sehen was hier stehen kann text um zu sehtext um zu sehen was hier stehen kannen 
                      was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier stehen kanntext 
                      um zu sehen was hier stehen kanntext um zu sehen was hier 
                      stehen kanntext um zu sehen was hier stehen kann text um zu sehtext um zu sehen was hier stehen kannen 
                      was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier 
                      stehen kanntext um zu sehen was hier stehen kann text um zu sehtext um zu sehen was hier stehen kannen 
                      was hier stehen hier stehen kannstehen kanntext um zu sehen was hier stehen kann text um zu sehtext um zu sehen was hier stehen kannen 
                      was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was hier 
                      stehen 
                  </p>
                </div>
            <div className="textNamen">
                <div className="col-xs-12 col-sm-6 col-lg-5 ">
                <h2 className="titeldrei"> Daniel Faber</h2>
                  <p className="textUber">Max Faber
                      hex ho das isz der text hex ho das isz der text 
                      hex ho das isz der text hex ho das isz der text 
                      hex ho das isz der text hex ho das isz der text 
                      hex ho das isz der text hex ho das isz der text 
                  </p>
                  <h2 className="titeldrei">Maxim Faber</h2>
                  <p className="textUber">KP Faber
                      hex ho das isz der text hex ho das isz der text 
                      hex ho das isz der text hex ho das isz der text
                      hex ho das isz der text hex ho das isz der text 
                      hex ho das isz der text hex ho das isz der text  
                  </p>
                </div>
             </div>
            </div>  
        </div>
    </div>
</Layout>
    );
  };
  export default Ueberuns;