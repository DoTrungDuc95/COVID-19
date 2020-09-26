import React, { Component } from 'react';
import Cards from './components/cards/Card';
import Chart from './components/charts/Chart';
import CountryPicher from './components/countryPicker/CountryPicher';

import style from './App.module.css';
import { getData } from './api';
import imgCovid from './images/image.png';

class App extends Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const data = await getData();
    this.setState({ data });
  }

  countryChange = async (country) => {
    const data = await getData(country);
    this.setState({ data, country });
  };

  render() {
    return (
      <div className={style.container}>
        <img src={imgCovid} className={style.image} />
        <Cards data={this.state.data} />
        <CountryPicher countryPick={this.countryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
