import React, { Component } from 'react';
import './Spinner.css';

class Spinner extends Component {

  render() {
    return (
      <div id="cooking">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div id="area">
          <div id="sides">
            <div id="pan" />
            <div id="handle" />
          </div>
          <div id="pancake">
            <div id="pastry" />
          </div>
       </div>
      </div>
    );
  }

}

export default Spinner;
