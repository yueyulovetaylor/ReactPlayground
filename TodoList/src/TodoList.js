import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'
import "./style.css"

class TodoList extends Component {

  constructor(props) {
    super(props);
    // Whenever, this.state or this.props is changed, render() will be executed again.
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // componentWillMount() {
  //   console.log("Calling componentWillMount");
  // }

  render() {
    // console.log("Parent calling render")
    return (
      <Fragment>
        <div>
          {/*Input entry box and Submit button*/}
          <label htmlFor='insertArea'>Please enter the item</label>
          <input 
            id = 'insertArea'
            value = {this.state.inputValue}
            onChange = {this.handleInputChange}
            className = 'input'
            // ref = {(input) => {this.input = input}}
          />
          <button onClick={this.handleButtonClick}>Submit</button>
        </div>
        <ul /*ref={(ul) => {this.ul = ul}}*/>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  // componentDidMount() {
  //   console.log("Calling componentDidMount");
  // }

  // shouldComponentUpdate() {
  //   console.log("Calling shouldComponentUpdate");
  //   return true;
  // }

  // componentWillUpdate() {
  //   console.log("Calling componentWillUpdate");
  // }

  // componentDidUpdate() {
  //   console.log("Calling componentDidUpdate");
  // }

  getTodoItem() {
    return this.state.list.map((item, index) => {
        return (
          <TodoItem 
            key={index}
            content={item} 
            index={index}
            deleteItem={this.handleItemDelete.bind(this)}
          />
        );
      })
  }

  handleInputChange(e) {
    // const value = this.input.value;
    const value = e.target.value;
    this.setState(() => ({inputValue: value}));
  }

  handleButtonClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    })/*, () => {
      console.log(this.ul.querySelectorAll('div').length);
    }*/);   // setState is asynchronized, so we need to the following work in the callback function
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    });
  }
}

export default TodoList;
