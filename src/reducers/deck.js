import { ADD_DECK, ADD_QUESTION } from '../actions/deck';

const initialState = {
  add: {
    title: 'add',
  },
};

const colors = ['#FFA104', '#0096F5', '#446DFF', '#FF2C3D'];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          color: getRandomColor(), // colors[Math.floor(Math.random() * colors.length)],
          questions: [],
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: [...state[action.deck].questions, ...action.question],
        },
      };
    default:
      return state;
  }
}
