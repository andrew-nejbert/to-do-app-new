import React, { Component } from "react";
import TodoContext from "./TodoContext";

export default class TodoProvider extends Component {
  state = {
    myInput: "",
    myOutput: [],

    changeMyInput: x => this._changeMyInput(x),
    addItem: () => this._addContent(),
    myDelete: () => this._deleteItems(),
    handleChange: index => this._handleChange(index),
    clearStorage: () => this._clearStorage(),
    deleteItem: notizEintrag => this._deleteItem(notizEintrag)
  };

  _deleteItem(notizEintrag) {
    this.setState({
      myOutput: this.state.myOutput.filter(item => item !== notizEintrag)
    });
    console.log(notizEintrag);
  }

  _clearStorage() {
    localStorage.clear();
    this.setState({ myOutput: [] });
  }

  _changeMyInput(x) {
    this.setState({ myInput: x });
  }

  _addContent() {
    this.setState({
      myOutput: [
        ...this.state.myOutput,
        { text: this.state.myInput, checked: false }
      ],
      myInput: ""
    });
  }

  componentDidMount() {
    const data = localStorage.getItem("toDoItem");
    if (data != null) {
      this.setState({ myOutput: JSON.parse(data) });
    } else {
      return null;
    }
    console.log("didmount!!!");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.myOutput.length !== this.state.myOutput.length) {
      localStorage.setItem("toDoItem", JSON.stringify(this.state.myOutput));
    }
  }

  _handleChange(index) {
    const meineNotizen = this.state.myOutput;
    meineNotizen[index] = {
      text: meineNotizen[index].text,
      checked: !meineNotizen[index].checked
    };

    this.setState({ myOutput: meineNotizen });
    localStorage.setItem("toDoItem", JSON.stringify(this.state.myOutput));
  }
  render() {
    return (
      <TodoContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
