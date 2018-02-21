import { setWeather, getWeather } from "../../src/actions/weatherActions";
import expect from "expect";

describe("Actions", () => {
  it("setWeather is called", () => {
    expect(setWeather({})).toBeTruthy();
  });
  it("getWeather is called", () => {
    expect(getWeather({})).toBeTruthy();
  });
});
