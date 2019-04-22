import React, { Component } from 'react';
import './shareButton.scss';
import arrow from '../../img/socialmedia/arrow.svg';

class ShareButton extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      url: '',
    };
  }

  componentDidMount() {
    this.setState({ url: window.location.href });
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
    const { url } = this.state;
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
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
              Facebook
            </a>
            <br />
            <br />
            <a href={`whatsapp://send?text=${url}`}>WhatsApp</a>
            <br />
            <br />
            <a
              href={`mailto:?&subject=Faber Ernährungsberatung&body=Schauen%20Sie%20sich%20den%20Beitrag%20von%20der%20Faber%20Ern%C3%A4hrunfsberatrung%20an%3A%0A%0A${url}`}
            >
              Email
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ShareButton;
