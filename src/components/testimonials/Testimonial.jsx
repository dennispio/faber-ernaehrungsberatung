import React from 'react';
import './testimonial.scss';

const Testimonial = (titel, text, img) => (
  <div className="container-full testimonials-container">
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-lg-7" />
      <div className="col-xs-12 col-sm-6 col-lg-5 testimonial-content">
        <div className="testimaonial-title">
          <h2>Wir haben es mit Faber geschafft: Unsere Referenzen.</h2>
        </div>
        <div className="testimonial-text">
          <p>
            Erklärungstext wieso man bei euch dann essen kann, wenn immer man
            will. Die Ernährungsberatung ist eine auf Dich abgestimmte Beratung.
            Das heißt konkret: Wir passen uns auf Dich an und nicht Du auf uns.
            Du sagst uns was Du willst und wir sagen Dir nicht was Du musst.{' '}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
