import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import '../styles/main.css';

export default class TaipeiAttrations extends Component {
  render() {
    return (
      <div className="main-content">
        <Header />
        TaipeiAttrations
      </div>
    );
  }
}

ReactDOM.render(<TaipeiAttrations />, document.getElementById('main'));
