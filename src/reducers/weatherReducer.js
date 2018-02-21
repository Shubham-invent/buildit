import { SET_WEATHER } from "./../actions/types";
const initialState = {
  weatherFetched: false,
  weatherFetching: false,
  errWeather: false,
  payload: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return Object.assign({}, state, {
        weatherFetched: true,
        weatherFetching: false,
        errWeather: false,
        payload: action.data
      });
    default:
      return state;
  }
};
