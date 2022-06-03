import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ searchText, cards }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchText)
  );

export const getAllColumns = (state) => state.columns;

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const modifyTextSearch = (payload) => ({
  type: 'MODIFY_SEARCH_TEXT',
  payload,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), ...action.payload }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { id: shortid(), ...action.payload }],
      };
    case 'MODIFY_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
