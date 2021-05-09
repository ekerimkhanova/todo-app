import {todosConstants} from "./todosConstans";

export const addNewItemAction = (id, text) => ({ type: todosConstants.ADD_ITEM, payload:{id: id, text: text} });

export const changeItemTextAction = (id, text) => ({ type: todosConstants.CHANGE_TEXT, payload:{id: id, text: text} });

export const changeItemStatusTodoAction = id => ({ type: todosConstants.SET_TODO_STATE, payload:{id: id} });

export const changeItemStatusInProcessAction = id => ({ type: todosConstants.SET_IN_PROCESS_STATE, payload:{id: id} });

export const changeItemStatusDoneAction = id => ({ type: todosConstants.SET_DONE_STATE, payload:{id: id} });

export const removeItemAction = id => ({ type: todosConstants.REMOVE_ITEM, payload:{id: id} });

export const toggleItemAction = id => ({ type: todosConstants.TOGGLE_ITEM_MENU, payload:{id: id} });

export const falseItemMenuAction = id => ({ type: todosConstants.FALSE_ITEM_MENU, payload:{id: id} });

export const disableItemInputAction = id => ({ type: todosConstants.DISABLE_ITEM_INPUT, payload:{id: id} });

export const showItemInputAction = id => ({ type: todosConstants.SHOW_ITEM_INPUT, payload:{id: id} });