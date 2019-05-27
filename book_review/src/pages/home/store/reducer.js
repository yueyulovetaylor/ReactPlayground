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
  }],
  articleList: [{
    id: 1,
    title: "‘It Was Like a Zoo’: Death on an Unruly, Overcrowded Everest",
    desc: "This has been one of the deadliest seasons on the world’s highest peak, \
      with at least 10 deaths. Veteran mountaineers blame an increase in permits and \
      too many inexperienced climbers.",
    imgUrl: 'https://static01.nyt.com/images/2019/05/26/world/26everest/merlin_138579441_fd4730ed-a8b8-4eb7-802c-800c436cd82a-threeByTwoLargeAt2X.jpg'
  }, {
    id: 2,
    title: 'A Migrant Family Takes a Greyhound Across America',
    desc: "Greyhound buses have become an essential part of the journey for many \
      Central American migrants, who provide revenue for the struggling company.",
    imgUrl: 'https://static01.nyt.com/images/2019/05/24/us/greyhound-fader01/greyhound-fader01-threeByTwoMediumAt2X.jpg'
  }, {
    id: 3,
    title: 'Nancy Pelosi and Fakebook’s Dirty Tricks',
    desc: "This latest doctored video proves that Facebook as we knew it is over.",
    imgUrl: 'https://static01.nyt.com/images/2019/05/26/opinion/26swisher/26swisher-square640.jpg'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}