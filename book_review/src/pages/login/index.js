import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
  render() {
    const { status } = this.props;

    if (status) {
      return <Redirect to='/'/>
    } else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input 
              placeholder='username' 
              ref={(input) => {console.log(input); this.account = input;}}
            />
            <Input 
              placeholder='password' 
              type='password' 
              ref={(input) => {console.log(input); this.password = input;}}
            />
            <Button 
              onClick={() => this.props.login(this.account, this.password)}
            >
              Login
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    }
  }
}

const mapState = (state) => ({
  status: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  }
});

export default connect(mapState, mapDispatch)(Login);