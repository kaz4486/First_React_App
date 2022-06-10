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

//drugi argument?
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getColumnsById = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

export const getAllLists = (state) => state.lists;

export const getSearchedText = (state) => state.searchText;

export const getAllFavoriteCards = (state) =>
  state.cards.filter((card) => card.isFavorite);

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });

export const addList = (payload) => ({ type: 'ADD_LIST', payload });

export const modifyTextSearch = (payload) => ({
  type: 'MODIFY_SEARCH_TEXT',
  payload,
});

export const toggleCardFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
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
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { id: shortid(), ...action.payload }],
      };
    case 'TOGGLE_CARD_FAVORITE':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : card
        ),
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
