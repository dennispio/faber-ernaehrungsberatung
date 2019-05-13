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
            <form
              method="GET"
              action="https://wt-0f5b4f9b29f9e05de6df10e225e5a3bd-0.sandbox.auth0-extend.com/webtask_forms"
            >
              <input type="email" name="Email" required /> <br />
              <input type="hidden" name="Newsletter" value="ja" />
              <input
                className="input-button"
                type="submit"
                value="Anfrage abschicken"
              />
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Newsletter;
