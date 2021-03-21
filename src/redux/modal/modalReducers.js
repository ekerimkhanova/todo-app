import { modalConstants } from "./modalConstans";

const initialState = {
    openModal: false,
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
      case modalConstants.OPEN_MODAL:
        return {
          open: true,
        };
      case modalConstants.CLOSE_MODAL:
        return {
          open: false,
        }
      default:
        return state;
    }
  }
  
  export default modalReducer;