import React from "react";
import { Link } from "react-router";
import { getWeather } from "../../actions/weatherActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class WeatherPage extends React.Component {
  constructor(props) {
    super(props);
    this._handleInput = this._handleInput.bind(this);
    this._search = this._search.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.state = {
      city: "",
      list: "",
      search: "",
      inProgress: false,
      errorApi: false,
      msg: ""
    };
  }
  _handleInput(e) {
    this.setState({ msg: "" });
    this.setState({ search: e.target.value });
  }
  _handleKeyPress(e) {
    if (this.state.search.trim() == "") {
      return;
    }

    if (e.keyCode == 13) {
      this._search();
    }
  }
  _search() {
    if (this.state.search.trim() == "") {
      return;
    }
    this.setState({
      city: "",
      list: "",
      msg: "",
      inProgress: true
    });
    this.props
      .getWeather(this.state.search)
      .then(() => {
        this.setState({
          city: this.props.weatherResponse.city,
          list: this.props.weatherResponse.list,
          msg: this.props.weatherResponse.message
        });

        this.setState({ inProgress: false });
      })
      .catch(() => {
        this.setState({ errorApi: true });
      });
  }
  render() {
    return (
      <div>
        <div className="search-bar">
          <br />
          <input
            type="text"
            value={this.state.search}
            className="form-control"
            placeholder="Enter the city of your Choice "
            onKeyDown={this._handleKeyPress}
            onChange={this._handleInput}
          />&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-primary"
            onClick={this._search}
          >
            Search
          </button>
        </div>

        <br />
        {this.props.weatherResponse.cod ? <p>{this.state.msg}</p> : ""}
        {this.state && this.state.list ? (
          <table className="table table-striped">
            <thead className="tbl-header">
              <tr>
                <th>Date</th>
                <th>Forecast</th>
                <th>Temperature(K)</th>
                <th>Wind</th>
                <th>Humidity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((val, index) => (
                <tr key={index}>
                  <td>{this.state.list[index].dt_txt.split(" ")[0]}</td>
                  <td>{this.state.list[index].weather["0"].description}</td>
                  <td>
                    Min:{this.state.list[index].main.temp_min} - Max:{
                      this.state.list[index].main.temp_max
                    }{" "}
                  </td>
                  <td>
                    speed:{this.state.list[index].wind.speed} - deg:{
                      this.state.list[index].wind.deg
                    }
                  </td>
                  <td>{this.state.list[index].main.humidity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : this.state.inProgress ? (
          <div>
            <br />Fetching Data...<br />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

WeatherPage.propTypes = {
  getWeather: PropTypes.func,
  weatherResponse: PropTypes.object
};

function mapStateToProps(state) {
  return {
    weatherResponse: state.weatherReducer.payload
  };
}
export default connect(mapStateToProps, { getWeather })(WeatherPage);
