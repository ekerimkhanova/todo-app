import {createSelector} from "reselect";

const getModalsSelector = state => state.modal;

export const getModalSelector = createSelector(getModalsSelector, modal => modal.open);
