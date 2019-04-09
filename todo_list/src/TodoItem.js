import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.content !== this.props.content;
  }

  // componentWillReceiveProps() {
  //   console.log("TodoItem Calling componentWillReceiveProps");
  // }

  // componentWillUnmount() {
  //   console.log("TodoItem Calling componentWillUnmount")
  // }

  render() {
    // console.log("Child calling render")
    const {/*test,*/ content} = this.props;
    return (
      <div onClick={this.handleClick}>
        {/* {test} - {content} */ content}
      </div>
    );
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  // test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

// TodoItem.defaultProps = {
//   test: 'Hello World'
// }

export default TodoItem;