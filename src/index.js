import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          latitiude: position.coords.latitude
        }),
      err =>
        this.setState({
          errorMessage: err.message
        })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitiude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitiude) {
      return <SeasonDisplay lat={this.state.latitiude} />;
    }

    return <Spinner message="Please accept location request..." />;
  }

  componentDidUpdate() {
    // console.log("My comp was updated");
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
