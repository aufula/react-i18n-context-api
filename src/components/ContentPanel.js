import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ContentPanel extends Component {
  static contextTypes = {
    locale: PropTypes.object
  }
  render() {
    const { locale } = this.context;
    return (
      <div className="contentPanel">
        <h1>{locale.header}</h1>
        <p>
          {locale.text}
        </p>
        <button>{locale.buttonLabel}</button>
        <footer>ContentPanel.js</footer>
      </div>
    );
  }
}

export default ContentPanel;