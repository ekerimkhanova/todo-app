import {todosConstants} from "./todosConstans";

export const addNewItem = (id, text) => ({ type: todosConstants.ADD_ITEM, payload:{id: id, text: text} });

export const changeItemText = (id, text) => ({ type: todosConstants.CHANGE_TEXT, payload:{id: id, text: text} });

export const changeItemStatusTodo = id => ({ type: todosConstants.SET_TODO_STATE, payload:{id: id} });

export const changeItemStatusInProcess = id => ({ type: todosConstants.SET_IN_PROCESS_STATE, payload:{id: id} });

export const changeItemStatusDone = id => ({ type: todosConstants.SET_DONE_STATE, payload:{id: id} });

export const removeItem = id => ({ type: todosConstants.REMOVE_ITEM, payload:{id: id} });

export const toggleItem = id => ({ type: todosConstants.TOGGLE_ITEM_MENU, payload:{id: id} });

export const falseItemMenu = id => ({ type: todosConstants.FALSE_ITEM_MENU, payload:{id: id} });

export const disableItemInput = id => ({ type: todosConstants.DISABLE_ITEM_INPUT, payload:{id: id} });

export const showItemInput = id => ({ type: todosConstants.SHOW_ITEM_INPUT, payload:{id: id} });