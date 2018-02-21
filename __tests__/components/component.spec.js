import React from "react";
import { shallow, configure, render, mount } from "enzyme";
import { Provider } from "react-redux";
import rootReducer from "../../src/reducers/index";
import thunk from "redux-thunk";
import { Router, browserHistory } from "react-router";
import { createStore, applyMiddleware, compose } from "redux";
import { WeatherPage } from "../../src/components/weather/WeatherPage";
import { expect } from "chai";

describe("Test Suite 1 to test WeatherPage Page", () => {
  let wrapper;

  wrapper = shallow(<WeatherPage weatherResponse={{}} />);

  it("Renders Correctly", () => {
    expect(wrapper.length).equals(1);
  });

  it("contains an `.search-bar` class", () => {
    expect(wrapper.find(".search-bar")).to.have.length(1);
  });

  it("has a button", () => {
    expect(wrapper.find("button")).to.exist;
  });
});
