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
    const {
      focused, list, page, totalPage, mouseIn,
      handleMouseEnter, handleMouseLeave, handleChangePage
    } = this.props;
    const JSList = list.toJS();
    const pageList = [];
    
    if (JSList.length) {
      for (let i = page * 10; i < (page + 1) * 10; ++i) {
        pageList.push(
          <SearchInfoItem key={JSList[i]}>{JSList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            Top Results
            <SearchInfoSwitch 
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              Switch
            </SearchInfoSwitch>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={`${focused ? 'focused' : ''} iconfont zoom`}>
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
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    }, handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }, handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    }, handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    }, handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      console.log(originAngle);
      console.log(spin.style.transform);
      if (page < totalPage - 1) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(0));
      }
    }
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Header);