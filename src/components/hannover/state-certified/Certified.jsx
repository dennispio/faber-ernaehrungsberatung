import React from "react";
import certi from "../../../img/certi.png";
import "./certified.scss";

const Certified = () => {
  return (
    <div className="container certi-container">
      <div className="col-md-1" />
      <div className="col-md-5 col-xs-12">
        <h2 className="farbverlauf">Wir sind staatlich geprüft</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="col-md-1" />
      <div className="col-md-5 col-xs-12">
        <img src={certi} alt="bild des zertifikat" title="zertifikat" />
      </div>
    </div>
  );
};

export default Certified;
