import React from "react";
import { Link } from "react-router";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Home page</h2>
          <p>Author : Shubham</p>
          <p>
            Supporting Stacks :
            React,Redux,React-Router,Webpack,Jest/enzyme/chai
          </p>
          <Link to="weather" className="btn btn-primary btn-lg">
            Try me..
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
