import React from "react";
import "../../src/styles.css";
class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      arr: [],
      count: 0
    };
  }
  componentDidMount() {
    console.log("ref did mount", this.myRef);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get SnapShot Before Update", this.myRef, prevProps, prevState);
    return { height: this.myRef.current.scrollHeight };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ref did update", this.myRef, prevProps, prevState, snapshot);
    if (snapshot.height > this.myRef.current.clientHeight - 50) {
      const scrollRef = this.myRef.current;
      let value = this.myRef.current.scrollHeight - snapshot.height;

      scrollRef.scrollTop =
        this.myRef.current.scrollHeight - this.myRef.current.clientHeight;
    }
  }
  render() {
    console.log("ref", this.state);
    return (
      <div className="outer">
        <div className="first">
          Scroll App{" "}
          <div>
            <button
              onClick={() =>
                this.setState({
                  arr: [...this.state.arr, `Hello ${this.state.arr.length}`],
                  count: this.state.count + 1
                })
              }
            >
              Add Chat {this.state.count}
            </button>
          </div>
        </div>
        <div ref={this.myRef} className="content">
          {this.state.arr.map((i, index) => {
            if (index % 2 === 0) {
              return (
                <div key={index} className="outerChat">
                  <div className="triangle" />
                  <div className="chat">{i}</div>
                </div>
              );
            } else {
              return (
                <div key={index} className="outerChat">
                  <div className="righttriangle" />
                  <div className="chat rightchat">{i}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
export default Scroll;
