import { LOAD_DECKS, ADD_DECK, ADD_QUESTION } from '../actions/deck';

const initialState = {
  add: {
    title: 'add',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: {
          ...action.deck,
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.deckId]: {
          ...state[action.question.deckId],
          questions: [...state[action.question.deckId].questions, action.question],
        },
      };
    default:
      return state;
  }
}
