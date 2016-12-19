import React, {Component} from 'react';
import { connect } from 'react-redux';

export default class WeatherList extends Component {
  renderWeather(item) {
    return (
      <tr>
        <th>{item}</th>
        <th>Temperature</th>
        <th>Pressure</th>
        <th>Humidity</th>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.props.weather.map(this.renderWeather)} */}
        </tbody>
      </table>
    )
  }
}
