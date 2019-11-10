import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salutation: props.status
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.status !== state.salutation) {
      return {
        salutation: props.status
      };
    }
    return null;
  }
  render() {
    console.log("state", this.state.salutation);
    return (
      <div>
        {this.state.salutation === "OFF"
          ? "React class is close Today"
          : "React class is open Today"}
      </div>
    );
  }
}
export default Test;
