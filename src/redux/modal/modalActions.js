import {modalConstants} from "./modalConstans";

export const openModal = () => ({ type: modalConstants.OPEN_MODAL });

export const closeModal = () => ({ type: modalConstants.CLOSE_MODAL });
