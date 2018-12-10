import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps.counter.value);
    console.log("presentProps", this.props.counter.value);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - willUnmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    return `badge badge-${
      this.props.counter.value === 0 ? "warning" : "primary"
    } m-2`;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
