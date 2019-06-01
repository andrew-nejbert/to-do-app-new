import React, { Component } from "react";

export default class Input extends Component {
  state = { contentInput: "", contentOutput: "", check: true };

  _replaceContent() {
    this.setState({ contentOutput: this.state.contentInput, contentInput: "" });
  }

  handleChange(event) {
    this.setState({ check: event.target.checked });
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.check}
          onChange={this.handleChange}
        />

        <p>{this.state.contentOutput}</p>
        <input
          type="text"
          value={this.state.contentInput}
          onChange={e => this.setState({ contentInput: e.target.value })}
        />
        <button onClick={() => this._replaceContent()}>+</button>
      </div>
    );
  }
}
