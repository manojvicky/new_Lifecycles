import React from "react";
import Test from "../Test/Test";
import Output from "../Output/Output";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "OFF"
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              status: this.state.status === "OFF" ? "ON" : "OFF"
            })
          }
        >
          Change the state {this.state.status}
        </button>
        <Test status={this.state.status} />
        <Output className="Output" />
      </div>
    );
  }
}
export default App;
