import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import deck from './reducers/deck';

export default createStore(deck, applyMiddleware(thunk));
