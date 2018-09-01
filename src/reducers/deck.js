import { LOAD_DECKS, ADD_DECK, DELETE_DECK, ADD_QUESTION, DELETE_QUESTIONS } from '../actions/deck';

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
    case DELETE_DECK:
      const decks = { ...state };
      decks[action.deck.id] = undefined;
      delete decks[action.deck.id];

      return {
        ...decks,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.deckId]: {
          ...state[action.question.deckId],
          questions: [...state[action.question.deckId].questions, action.question],
        },
      };
    case DELETE_QUESTIONS:
      const deck = { ...state[action.deckId] };
      const questionsToDelete = action.questionsToDelete;

      questionsToDelete
        .sort()
        .reverse()
        .forEach(index => {
          deck.questions.splice(index, 1);
        });

      return {
        ...state,
        [action.deckId]: {
          ...deck,
        },
      };
    default:
      return state;
  }
}
