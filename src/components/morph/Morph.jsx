import React from 'react';
import PropTypes from 'prop-types';
import './morph.scss';
import posed from 'react-pose';
import { tween } from 'popmotion';
import { interpolate } from 'flubber';
import bgMorph from '../../img/morph/morph_bg.svg';

const paths = {
  schokolade:
    'M182.1,288.2c-8.5-9.8-19.5-39.4,4.2-56.8c97-71.1,258.6-170.8,305.6-126.7c63.6,59.8-67.3,279.5,29.9,368.9c41.6,38.3,103.8,32.7,104.2,56.2c0.6,26.8-78.1,61.2-107.1,38.6c-18.8-14.5-10.9-48.3-33.5-59c-13.2-6.3-27.8-0.5-31.4,0.7C428.3,518.3,342.1,474.3,182.1,288.2z',
  peanuts:
    'M490,81.8c-26.8,7.4-46.7,77.2-20,354.5c0.7,8.3-3.6,16.3-10.9,20.2c-9.1,4.8-22.9,10.1-29.8,23.3c-18.5,35,8.2,75.1,13.5,83.1c31.5,47.1,100.8,69,119.2,49.8c19.8-20.7-38.2-69.2-24.5-138.4c12.1-60.8,65.7-67.1,87.9-119.2C670.4,249.9,540.7,67.9,490,81.8z',
  // schokolade:
  //   'M31.89,193.71c-7.43-8.6-17-34.38,3.67-49.59C120.42,82,261.58-5.19,302.66,33.39c55.59,52.28-58.81,244.28,26.14,322.42,36.43,33.48,90.67,28.64,91.12,49.05.54,23.36-68.29,53.53-93.63,33.75C309.91,425.9,316.81,396.36,297,387c-11.54-5.46-24.25-36-27.39.63C247.08,394.84,171.71,356.35,31.89,193.71Z',
  // peanuts:
  //   'M272.07,8.32c-22.57,6.21-39.26,65-16.77,298.48a17.46,17.46,0,0,1-9.19,17c-7.74,4-19.26,8.54-25.15,19.59-15.64,29.5,6.93,63.19,11.45,70,26.52,39.66,84.87,58.12,100.43,41.92,16.69-17.41-32.24-58.28-20.63-116.48,10.15-51.18,55.29-56.5,74-100.43C424,149.78,314.79-3.45,272.07,8.32Z',
};

const pathIds = Object.keys(paths);

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1,
  }).pipe(interpolate(from, to));

const Icon = posed.path(
  pathIds.reduce((config, id) => {
    config[id] = {
      d: paths[id],
      transition: morphTransition,
    };

    return config;
  }, {})
);

const NextButton = posed.button({
  hoverable: true,
  pressable: true,
  init: { scale: 1 },
  hover: { scale: 1.1 },
  press: { scale: 0.8 },
});

export default class Morph extends React.Component {
  state = { pathIndex: 0 };

  // gotoNext = () => {
  //   const { pathIndex } = this.state;
  //   const nextIndex = pathIndex + 1;
  //   this.setState({
  //     pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex,
  //   });
  // };

  schokolade = () => {
    const { pathIndex } = this.state;
    this.setState({
      pathIndex: 0,
    });
  };

  peanuts = () => {
    const { pathIndex } = this.state;
    this.setState({
      pathIndex: 1,
    });
  };

  render() {
    return (
      <div className="container morph-component-container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-lg-8 morph-component">
            <h1>Col 8</h1>
            <div className="morph-svg">
              <svg width="400" height="400" viewBox="0 0 750 500">
                <Icon pose={pathIds[this.state.pathIndex]} />
              </svg>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-lg-4">
            <h1>Col 4</h1>
            {/* <NextButton onClick={this.gotoNext}>Next icon!</NextButton> */}
            <NextButton onClick={this.gotoNext}>Next icon!</NextButton>
            <li onClick={this.schokolade}>Schokolade</li>
            <li onClick={this.peanuts}>Erdnüsse</li>
          </div>
        </div>
      </div>
    );
  }
}
