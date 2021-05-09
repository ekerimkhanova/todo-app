import {createSelector} from "reselect";

const getSelectsSelector = state => state.select;

export const getSelectedContentSelector = createSelector(getSelectsSelector, state => state.selectContent);
