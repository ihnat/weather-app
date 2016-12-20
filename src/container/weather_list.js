import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log('cityData: ', cityData);
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    console.log('temps: ', temps);
    return (
      <tr key={name}>
        <th>{name}</th>
        <th>
          <Chart data={temps} color="blue" units="K"/>
        </th>
        <th>
          <Chart data={pressures} color="orange" units="hPa"/>
        </th>
        <th>
          <Chart data={humidities} color="red" units="%"/>
        </th>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
