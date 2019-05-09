import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './countdown.scss';

export default class Countdown extends Component {
  millisecondsForDay = 86400000;

  millisecondsForHours = 3600000;

  millisecondsForMinutes = 60000;

  millisecondsForSeconds = 1000;

  milliSecondsToTargetDate = Date.now();

  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    };
  }

  componentDidMount() {
    const { date } = this.props;

    const parsedDate = Date.parse(date);
    this.milliSecondsToTargetDate = parsedDate - this.milliSecondsToTargetDate;
    this.calculateNumbersForState(this.milliSecondsToTargetDate);
    setInterval(() => this.decreaseTime(), 1000);
  }

  calculateNumbersForState(milliSecondsToTargetDate) {
    let milliSecondsForCalc = milliSecondsToTargetDate;
    const days = Number.parseInt(milliSecondsForCalc / this.millisecondsForDay);
    milliSecondsForCalc -= days * this.millisecondsForDay;

    const hours = Number.parseInt(
      milliSecondsForCalc / this.millisecondsForHours
    );
    milliSecondsForCalc -= hours * this.millisecondsForHours;

    const minutes = Number.parseInt(
      milliSecondsForCalc / this.millisecondsForMinutes
    );
    milliSecondsForCalc -= minutes * this.millisecondsForMinutes;

    const seconds = Number.parseInt(
      milliSecondsForCalc / this.millisecondsForSeconds
    );

    this.setState({
      seconds,
      minutes,
      hours,
      days,
    });
  }

  decreaseTime() {
    const { seconds, minutes, hours, days } = this.state;
    if (seconds === 0) {
      this.decreaseMinutes(minutes, hours, days);
    } else {
      this.setState({
        seconds: seconds - 1,
      });
    }
  }

  decreaseMinutes(minutes, hours, days) {
    if (minutes === 0) {
      this.decreaseHours(hours, days);
    } else {
      this.setState({ seconds: 59, minutes: minutes - 1 });
    }
  }

  decreaseHours(hours, days) {
    if (hours === 0) {
      this.setState({
        seconds: 59,
        minutes: 59,
        hours: 23,
        days: days - 1,
      });
    } else {
      this.setState({ seconds: 59, minutes: 59, hours: hours - 1 });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  renderTime(time, subheader) {
    return (
      <>
        <div className="font-mono fs-super">
          {time < 10 || time > 100 ? `0${time}` : time}
        </div>
        <div className="fs-xxl">{subheader}</div>
      </>
    );
  }

  render() {
    const { seconds, minutes, hours, days } = this.state;
    const { season } = this.props;

    return (
      <div className="container countdown-container">
        <h3 className="farbverlauf">Du kannst es auch schaffen!</h3>
        <h3 className="farbverlauf">Der {season} kommt in ...</h3>
        <div className="row text-start">
          <div className="col-md-3 col-xs-6">
            {this.renderTime(days, 'Tage')}
          </div>
          <div className="col-md-3 col-xs-6">
            {this.renderTime(hours, 'Stunden')}
          </div>
          <div className="col-md-3 col-xs-6">
            {this.renderTime(minutes, 'Minuten')}
          </div>
          <div className="col-md-3 col-xs-6">
            {this.renderTime(seconds, 'Sekunden')}
          </div>
        </div>
      </div>
    );
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
};
