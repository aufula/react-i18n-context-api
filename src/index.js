import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { render } from 'react-dom';
import Panel from './components/Panel';

const en = {
  "header": "Heading Text",
  "text": "This content is inside the third panel, and so it is also inside the internal panel and the parent panel.",
  "buttonLabel": "I'm a button"
}
const pt = {
  "header": "Texto de Cabeçalho",
  "text": "O Araketu, o Araketu quando toca, deixa todo mundo pulando que nem pipoca. O fogo é fogo! Esquenta...",
  "buttonLabel": "Sou um botão"
}

const locales = { en, pt };

class App extends Component {
  static childContextTypes = {
    locale: PropTypes.object
  }

  state = {
    currentLocale: 'en'
  }

  getChildContext() {
    return { locale: locales[this.state.currentLocale] }
  }

  changeLocale(locale) {
    this.setState({ currentLocale: locale })
  }

  render() {
    return (
      <div>
        <nav>
          <a onClick={() => this.changeLocale('en')}>🇺🇸</a>
          <a onClick={() => this.changeLocale('pt')}>🇧🇷</a>
        </nav>
        <Panel />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'))