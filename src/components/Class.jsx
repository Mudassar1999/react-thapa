import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Its a class component.",
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.props.age}</h1>
      </>
    );
  }
}

export default ClassComponent;
