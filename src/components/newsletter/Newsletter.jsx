import React, { Component } from 'react';

class Newsletter extends Component {
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
    this.setState({ showMenu: true }, () => {
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
          <p>Newsletter abbonieren</p>
        </div>
        {showMenu ? (
          <div className="social-media-share-menu">
            <form>
              <input type="text" />
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Newsletter;
