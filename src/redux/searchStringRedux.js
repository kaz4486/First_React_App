//selectors
export const getSearchedText = (state) => state.searchText;

// actions
const createActionName = (actionName) => `app/searchString/${actionName}`;
const MODIFY_SEARCH_TEXT = createActionName('MODIFY_SEARCH_TEXT');

// actions creators

export const modifyTextSearch = (payload) => ({
  type: MODIFY_SEARCH_TEXT,
  payload,
});

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case MODIFY_SEARCH_TEXT:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;
