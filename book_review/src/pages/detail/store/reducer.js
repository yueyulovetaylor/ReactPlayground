import { fromJS } from 'immutable';
import * as actionTypes from './constants';

const defaultState = fromJS({
  title: '‘It Was Like a Zoo’: Death on an Unruly, Overcrowded Everest',
  content: '<img src="/img/newsHeaderImg1.jpg"></img><p>NEW DELHI — Ed Dohring, a doctor from Arizona, had dreamed his whole life of reaching the top of Mount Everest. But when he summited a few days ago, he was shocked by what he saw.</p><p>Climbers were pushing and shoving to take selfies. The flat part of the summit, which he estimated at about the size of two Ping-Pong tables, was packed with 15 or 20 people. To get up there, he had to wait hours in a line, chest to chest, one puffy jacket after the next, on an icy, rocky ridge with a several-thousand foot drop.</p>'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}