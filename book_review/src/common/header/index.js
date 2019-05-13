import React from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav, 
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style'

const Header = (props) => (
  <HeaderWrapper>
    <Logo/>
    <Nav>
      <NavItem className='left active'>Home</NavItem>
      <NavItem className='left'>Download App</NavItem>
      <NavItem className='right'>Log In</NavItem>
      <NavItem className='right'>
        <i className="iconfont">&#xe636;</i>
      </NavItem>
      <SearchWrapper>
        <CSSTransition
          in={props.focused}
          timeout={200}
          classNames="slide"
        >
          <NavSearch
            className={props.focused ? 'focused' : ''}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
          />
        </CSSTransition>
        <i className={`${props.focused ? 'focused' : ''} iconfont`}>
          &#xe637;
        </i>
      </SearchWrapper>
    </Nav>
    <Addition>
      <Button className='write'>
        <i className="iconfont">&#xe601;</i>Review
      </Button>
      <Button className='reg'>Register</Button>
    </Addition>
  </HeaderWrapper>
);

const mapStatesToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Header);