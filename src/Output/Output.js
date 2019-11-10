import React from "react";
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
function Output() {
  return arr.map(i => <div>{i}</div>);
}
export default Output;
