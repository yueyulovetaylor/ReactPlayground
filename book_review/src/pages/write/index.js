import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {
    const { status } = this.props;

    if (status) {
      return (<div>write an article</div>);
    } else {
      return (<Redirect to='/login' />);
    }
  }
}

const mapState = (state) => ({
  status: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Write);