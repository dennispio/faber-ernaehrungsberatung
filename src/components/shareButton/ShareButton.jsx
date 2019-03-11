import React, { Component } from 'react';
import './shareButton.scss';
import arrow from '../../img/socialmedia/arrow.svg';

class ShareButton extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }

  showMenu = event => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  };

  render() {
    const { showMenu } = this.state;
    return (
      <div className="share-button-container col-xs-12 col-sm-6 col-lg-6">
        <div
          className="social-media-share"
          onKeyPress={this.showMenu}
          onClick={this.showMenu}
          role="button"
          tabIndex="0"
        >
          <p>
            Artikel teilen auf ...
            <img className="arrow" src={arrow} alt="menupfeil" />
          </p>
        </div>
        {showMenu ? (
          <div className="social-media-share-menu">
            <a href="#">Facebook</a>
            <br />
            <br />
            <a href="#">WhatsApp</a>
            <br />
            <br />
            <a href="#">Email</a>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ShareButton;
