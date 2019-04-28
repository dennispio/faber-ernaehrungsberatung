import React from 'react';
import PropTypes from 'prop-types';
import './morph.scss';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-8">
            <h1>Col 8</h1>
          </div>
          <div className="col-xs-12 col-sm-12 col-lg-4">
            <h1>Col 4</h1>
          </div>
        </div>
      </div>
    );
  }
}
