import React from 'react';
import Layout from '../components/layouts/Layout';
import '../constants/style/ueberuns.scss';
import bubbleOne from '../img/bubbles/bubble_subpage_header_2.svg';
import bubbleTwo from '../img/bubbles/bubble_service_1.svg';

const Ueberuns = props => {
  const { data } = props;

  return (
    <Layout
      pageName="ueberuns"
      title="uberuns title"
      description="ueberuns desc"
    >
      <div className="container-full ueberUnsContainer">
      <h1 className="texttitel farbverlauf">Über Uns</h1>
      <h2 className="titelzwei farbverlauf">
                Unsere Entstehung und Philosophie
              </h2>
        <div className="ueberunsContainerImg" />
        <img
          className="bubble-zwei"
          src={bubbleTwo}
          alt="hintergrund bubble mit verlauf"
        />
        <img
          className="bubble-eins"
          src={bubbleOne}
          alt="header bubble mit verlauf"
        />
        <div className="container ueberUnsContent">
         
              
              <p className="textUber">
                text um zu sehen was hier stehen kanntext um zu sehen was hier
                stehen kanntext um zu sehen was hier stehen kanntext um zu sehen
                was hier stehen kann text um zu sehtext um zu sehen was hier
                stehen kannen was hier stehen kanntext um zu sehen was hier
                stehen kanntext um zu sehen was hier stehen kanntext um zu sehen
                was hier stehen kanntext um zu sehen was hier stehen kanntext um
                zu sehen was hier stehen kanntext um zu sehen was hier stehen
                kann text um zu sehtext um zu sehen was hier stehen kannen was
                hier stehen kanntext um zu sehen was hier stehen kanntext um zu
                sehen was hier stehen kanntext um zu sehen was hier stehen
                kanntext um zu sehen was hier stehen kanntext um zu sehen was
                hier stehen kanntext um zu sehen was hier stehen kann text um zu
                sehtext um zu sehen was hier stehen kannen was hier stehen hier
                stehen kannstehen kanntext um zu sehen was hier stehen kann text
                um zu sehtext um zu sehen was hier stehen kannen was hier stehen
                kanntext um zu sehen was hier stehen kanntext um zu sehen was
                hier stehen kanntext um zu sehen was hier stehen kanntext um zu
                sehen was hier stehen kanntext um zu sehen was hier stehen lol
              </p>
           
          <div className="textNamen ">
            
              <h1 className="titelunten farbverlauf"> Das sind wir</h1>
              <h3 className="titelMaxim"> Maxim Faber</h3>
              <p className="textUberMaxim">
                Max Faber hex ho das isz der text hex ho das isz der text hex ho
                das isz der text hex ho das isz der text hex ho das isz der text
                hex ho das isz der text hex ho das isz der text hex ho das isz
                der text
              </p>
              <h3 className="titelDaniel">Daniel Faber</h3>
              <p className="textUberDaniel">
                KP Faber hex ho das isz der text hex ho das isz der text hex ho
                das isz der text hex ho das isz der text hex ho das isz der text
                hex ho das isz der text hex ho das isz der text hex ho das isz
                der text
              </p>
          
          </div>
          </div>
      </div>
    </Layout>
  );
};
export default Ueberuns;
