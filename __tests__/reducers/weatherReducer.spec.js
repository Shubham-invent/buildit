import reducer from "../../src/reducers/weatherReducer";
import { SET_WEATHER } from "../../src/actions/types";
import expect from "expect";
let data = {};
describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      weatherFetched: false,
      weatherFetching: false,
      errWeather: false,
      payload: {}
    });
  });

  it("should handle SET_WEATHER", () => {
    const action = {
      type: SET_WEATHER,
      data
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, action)).toEqual({
      errWeather: false,
      payload: {},
      weatherFetched: true,
      weatherFetching: false
    });
  });
});
