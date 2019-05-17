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
      <div className="ueberUnsContainer">
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
        <div className="texttitel">
        <h1 className="farbverlauf">Über uns</h1>
          <h2>
            Unsere Entstehung <br /> und Philosophie
          </h2>
          <p>
            text um zu sehen was hier stehen kanntext um zu sehen was hier
            stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was
            hier stehen kann text um zu sehtext um zu sehen was hier kannen was
            hier stehen kanntext um zu sehen was hier stehen kanntext um zu
            sehen was hier stehen kanntext um zu sehen was hier stehen kanntext
            kanntext um zu sehen was hier stehen kanntext um zu sehen was hier
            kanntext um zu sehen was hier stehen kann text um zu sehtext um zu
            sehen was hier stehen kannen was hier stehen kanntext um zu sehen
            was hier stehen kanntext um zu sehen was hier stehen kanntext sehen
            was hier stehen kanntext um zu sehen was hier stehen kanntext um zu
            sehen was hier stehen kanntext um zu sehen was hier stehen kanntext
            um zu sehen was hier stehen kann text um zu sehtext um zu sehen was
            hier stehen kannen was hier stehen hier stehen kannstehen kanntext
            um zu sehen was hier stehen kann text um zu sehtext um zu sehen was
            hier stehen kannen was hier stehen kanntext um zu sehen was hier
            stehen kanntext um zu sehen was hier stehen kanntext um zu sehen was
            hier stehen kanntext um zu sehen was hier stehen kanntext um zu
            sehen was hier stehen kanntext um zu sehen was hier stehen lol</p>
        </div>
        <div className="textNamen">       
            <h2 className="farbverlauf"> Das sind wir</h2>
            <p className="bruder-container">Maxim Faber</p>
            <p>
              Max Faber hex ho das isz der text hex ho das isz der text hex ho
              das isz der text hex ho das isz der text hex ho das isz der text
              hex ho das isz der text hex ho das isz der text hex ho das isz
              der text
            </p>
            <p className="bruder-container">Daniel Faber</p>
            <p>
              KP Faber hex ho das isz der text hex ho das isz der text hex ho
              das isz der text hex ho das isz der text hex ho das isz der text
              hex ho das isz der text hex ho das isz der text hex ho das isz
              der text
            </p> 
        </div>
    </div>
    </Layout>
  );
};
export default Ueberuns;
