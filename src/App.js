import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

const companies = [
  {name: 'Uber', emoji: '🚗'},
  {name: 'Amazon', emoji: '🛍️'},
  {name: 'Intercom', emoji: '💬'},
  {name: 'Netflix', emoji: '🎬'},
  {name: 'Airbnb', emoji: '🏨'},
  {name: 'Slack', emoji: '🐱‍💻'},
  {name: 'Spotify', emoji: '🤘'},
  {name: 'Github', emoji: '💬'},
  {name: 'Google', emoji: '🔍'}
];

const companyTypes = [
  {name: 'Toasters', emoji: '🍞'},
  {name: 'Tacos', emoji: '🌮'},
  {name: 'Nailcare', emoji: '💅'},
  {name: 'Wastebasket', emoji: '🗑️'},
  {name: 'Pistols', emoji: '🔫'},
  {name: 'Hot dudes', emoji: '🎅'},
  {name: 'Women Haircuts', emoji: '💇'},
  {name: 'Weed', emoji: '🌿'},
  {name: 'Fire', emoji: '🔥'},
  {name: 'Dancing', emoji: '💃' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '____',
      product: '____',
      companyImg: null,
      productImg: null,
      displayLogo: false
    };
  }

  handleGenerateIdea = () => {
    const company = companies[Math.floor(Math.random() * companies.length)];
    const product = companyTypes[Math.floor(Math.random() * companyTypes.length)];
    const companyName = company.name;
    const companyImg =  company.emoji;
    const productName = product.name;
    const productImg = product.emoji
    this.setState({type: companyName, companyImg, product: productName, productImg, displayLogo: false });
  }

  handleGenerateLogo = () => {
    this.setState({displayLogo: true });
  }

  render() {
    const { type, product, companyImg, productImg, displayLogo} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4> no name, no ideas, no problem </h4>
        </header>
        <div className="top">
          <p className="App-intro">
            <h1 className="App-title">
              We're the <span className="gen-text">{type}</span> of <span className="gen-text">{product}</span>.
            </h1>
            <button 
              className="gen-button"
              onClick={this.handleGenerateIdea}
            >
              Tell me what we are
            </button>
          </p>
        </div>
      {type !== '____' ?
        <p className="App-intro">
        {displayLogo ?
          <h1 className="App-title">
            {companyImg}{productImg}.io
          </h1>
         : <button 
            className="gen-button"
            onClick={this.handleGenerateLogo}
          >
            Reveal My Domain
          </button>}
        </p>
      : <span /> }
      </div>
    );
  }
}

export default App;
