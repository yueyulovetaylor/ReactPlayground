import React, { Component } from 'react';
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoItem,  
  Addition,
  Button
} from './style'

class Header extends Component {

  getListArea() {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Top Results
            <SearchInfoSwitch>
              Switch
            </SearchInfoSwitch>
            <SearchInfoList>
              {
                this.props.list.map((item) => {
                  return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                })
              }
            </SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
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
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i className={`${this.props.focused ? 'focused' : ''} iconfont`}>
              &#xe637;
            </i>
            {this.getListArea()}
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
  }
}

const mapStatesToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Header);