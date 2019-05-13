import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';

class Newsletter extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }

  render() {
    const { showMenu } = this.state;
    return (
      <div className="share-button-container col-xs-12 col-sm-6 col-lg-6">
        <div
          className="social-media-share"
          onKeyPress={<Link to="/newsletter" />}
          onClick={() => navigate('/newsletter')}
          role="button"
          tabIndex="0"
        >
          <p>Newsletter abbonieren</p>
        </div>
      </div>
    );
  }
}

export default Newsletter;
