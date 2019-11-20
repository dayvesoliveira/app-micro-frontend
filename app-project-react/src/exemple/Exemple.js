import * as React from 'react';
import PropTypes from 'prop-types';

export class ExampleComponent extends React.Component {

  static propTypes = {
    name:       PropTypes.string,
    onHelloEvt: PropTypes.func
  }

  static defaultProps = {
    name: "Exemple Component React"
  }

  render() {
    const { name, onHelloEvt } = this.props;
    return (
      <div className="App-header">
        <img src="/logo.png" alt="React Logo" className="logo" />
        <p>Hello <strong>{name}</strong> from your friendly React component.</p>
        <button type="submit" className="btn btn-secondary" onClick={onHelloEvt}>Say hello</button>
      </div>
    )
  }
}