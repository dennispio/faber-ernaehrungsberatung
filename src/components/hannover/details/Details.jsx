import React from 'react';

import './details.scss';

const Details = () => (
  <div className="container-full details-container">
    <div className="details-container-img" />
    <div className="grid-oben">
      <h3 className="farbverlauf">Hannover ist die Abnehmstadt Nr.1</h3>
      <p>
        Lorem 111 ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        nostrum corrupti. Dolorem quidem incidunt dignissimos mollitia
        similique, nam velit sit modi. Et iusto nam labore. Error labore
        corporis voluptatibus hic! Lorem 111 ipsum dolor sit amet consectetur
        adipisicing elit. Laudantium, nostrum corrupti. Dolorem quidem incidunt
        dignissimos mollitia similique, nam velit sit modi. Et iusto nam labore.
        Error labore corporis voluptatibus hic!
      </p>
    </div>
    <div className="grid-mitte-links farbverlauf">
      <h3>Drei gute Gründe die für uns sprechen:</h3>
    </div>
    <div className="grid-links">
      <div className="grund-container">
        <span className="big-number-left blau">1</span>
        <p className="p-container-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
      </div>
    </div>
    <div className="grid-rechts">
      <div className="grund-container">
        <span className="big-number-right blau">2</span>
        <p className="p-container-right">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
      </div>
    </div>
    <div className="grid-bottom">
      <div className="grund-container">
        <span className="big-number-bottom blau">3</span>
        <p className="p-container-bottom">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
      </div>
    </div>
  </div>
);

export default Details;
