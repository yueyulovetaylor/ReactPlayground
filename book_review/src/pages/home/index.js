import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData();
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            className='banner-img'
            alt=''
          ></img>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }
}

const connectDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
})

export default connect(null, connectDispatch)(Home);

