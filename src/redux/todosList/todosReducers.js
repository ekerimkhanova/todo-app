import { todosConstants } from "./todosConstans";

const initialState = {
  itemsList: [],
  item: {
    id: null,
    text: '',
    inProcess: false,
    done: false,
    toggleElipsis: false,
    disabled: true,
  },
  prevId: 0,
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todosConstants.ADD_ITEM:
      return {
        ...state,
        itemsList: [...state.itemsList].concat({ ...state.item, id: action.payload.id, text: action.payload.text, disabled: true }),
        prevId: action.payload.id,
      };
    case todosConstants.CHANGE_TEXT:
      return {
        ...state,
        itemsList: state.itemsList.map(item => item.id === action.payload.id ? { ...item, text: action.payload.text } : item)
      };
    case todosConstants.SET_TODO_STATE:
      return {
        ...state,
        itemsList: state.itemsList.map(item => item.id === action.payload.id ? { ...item, inProcess: false, done: false } : item)
      };
    case todosConstants.SET_IN_PROCESS_STATE:
      return {
        ...state,
        itemsList: state.itemsList.map(item => item.id === action.payload.id ? { ...item, inProcess: true } : item)
      };
    case todosConstants.SET_DONE_STATE:
      return {
        ...state,
        itemsList: state.itemsList.map(item => item.id === action.payload.id ? { ...item, inProcess: false, done: true } : item)
      };
    case todosConstants.REMOVE_ITEM:
      return {
        ...state,
        itemsList: state.itemsList.filter(item => item.id !== action.payload.id)
      };
    case todosConstants.TOGGLE_ITEM_MENU:
      return {
        ...state,
        itemsList: state.itemsList.map(item => item.id === action.payload.id ? { ...item, toggleElipsis: !item.toggleElipsis } : item)
      };
    case todosConstants.FALSE_ITEM_MENU:
      return {
        ...state,
        itemsList: state.itemsList.map(item => item.id === action.payload.id ? { ...item, toggleElipsis: false } : item)
      };
    case todosConstants.DISABLE_ITEM_INPUT:
      return {
        ...state,
        itemsList: state.itemsList.map(item => item.id === action.payload.id ? { ...item, disabled: true } : item)
      };
    case todosConstants.SHOW_ITEM_INPUT:
      return {
        ...state,
        itemsList: state.itemsList.map(item => item.id === action.payload.id ? { ...item, disabled: false } : item)
      };
    default:
      return state;
  }
}

export default todosReducer;