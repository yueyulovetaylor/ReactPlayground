import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: 'Top Stories',
    imgUrl: '//tvax2.sinaimg.cn/crop.18.21.500.500.180/60718250ly1fe7kog3jroj20f00f03zj.jpg'
  }, {
    id: 2,
    title: 'Sports News',
    imgUrl: '//tvax3.sinaimg.cn/crop.0.0.180.180.180/61add42aly1fye8n65l7lj2050050glp.jpg'
  }, {
    id: 3,
    title: 'Community Stories',
    imgUrl: '//tvax4.sinaimg.cn/crop.0.13.367.367.180/9e5389bbly8g1qxioowd3j20a70al77y.jpg'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}