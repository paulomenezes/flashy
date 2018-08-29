import { getDecks, saveDeck, addCardToDeck } from '../utils/storage';

export const LOAD_DECKS = 'LOAD_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const loadDecks = () => async dispatch => {
  const decks = await getDecks();

  dispatch({
    type: LOAD_DECKS,
    decks,
  });
};

export const addDeck = (id, title) => {
  const deck = {
    id,
    title,
    color: getRandomColor(),
    questions: [],
  };

  saveDeck(deck);

  return {
    type: ADD_DECK,
    deck,
  };
};

export const addQuestion = (deckId, question, answer) => async dispatch => {
  const card = {
    deckId,
    question,
    answer,
  };

  await addCardToDeck(card);

  dispatch({
    type: ADD_QUESTION,
    question: card,
  });
};
