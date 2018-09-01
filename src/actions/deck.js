import { getDecks, saveDeck, deleteDeck, addCardToDeck, deleteQuestions } from '../utils/storage';
import { getRandomColor } from '../utils/helpers';

export const LOAD_DECKS = 'LOAD_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTIONS = 'DELETE_QUESTIONS';

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

export const removeDeck = deck => {
  deleteDeck(deck);

  return {
    type: DELETE_DECK,
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

export const removeQuestions = (deckId, questionsToDelete) => {
  deleteQuestions(deckId, questionsToDelete);

  return {
    type: DELETE_QUESTIONS,
    deckId,
    questionsToDelete,
  };
};
