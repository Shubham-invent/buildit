import { SET_WEATHER } from "./types";

export function setWeather(data) {
  return {
    type: SET_WEATHER,
    data
  };
}

export function getWeather(city) {
  return dispatch => {
    return fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=df39ee06a53346c17477942ada693c4d"
    )
      .then(result => result.json())
      .then(function(data) {
        dispatch(setWeather(data));
      })
      .catch(function(error) {
        //alert(error);
      });
  };
}
