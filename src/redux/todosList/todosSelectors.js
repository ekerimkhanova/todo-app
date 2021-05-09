import {createSelector} from "reselect";

const getTodosSelector = state => state.todosList;

export const getTodosListSelector = createSelector(getTodosSelector, state => state.itemsList);

export const getIdSelector = createSelector(getTodosSelector, state => state.prevId);
