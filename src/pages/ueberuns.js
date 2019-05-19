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
          Wir sind Maxim und Daniel. Gemeinsam betreiben wir Leistungssport seit unserer Kindheit. Vor etwa 8 Jahren begann Maxim sich mit dem Kraftsport intensiv auseinanderzusetzen. Ein sehr wichtiger Aspekt des Sports ist das Thema Ernährung, weshalb sich Maxim aus Interesse alles autodidaktisch angeeignet hat. Somit wurde das Interesse an Daniel vermittelt, wobei wir uns beide fortlaufend weitergebildet haben. Von stetiger Informationsaufnahme bis hin zum persönlichen Erfolg nahm die Erfahrung mit der Zeit stetig zu. Über mehrere Jahre haben wir unserem direkten Umfeld bei der Ernährung unter die Arme gegriffen und Menschen glücklich gemacht. Das Glück, die Zufriedenheit und die positive Resonanz der Menschen hat uns zu der Entscheidung bewegt eine professionelle Ernährungsberatung mit dem Leitsatz „Lebensqualität steigern ohne zu verzichten“ zu gründen, um mehr Menschen zu helfen.
Die Zufriedenheit der Kunden und die damit steigernde Lebensqualität bildet das Fundament unserer Arbeit.
</p>
        </div>
        <div className="background-container" />
        {/* <div className="textNamen">       
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
        </div> */}
    </div>
    </Layout>
  );
};
export default Ueberuns;
