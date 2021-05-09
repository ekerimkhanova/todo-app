import DoneContainer from "../../components/Done/functional/DoneContainer";
import InProcessContainer from "../../components/InProcess/functional/InProcessContainer";
import ToDoContainer from "../../components/ToDo/functional/ToDoContainer";
import { selectConstans } from "./selectConstans";

const initialState = {
    selectContent: ToDoContainer,
}

const selectReducer = (state = initialState, action) => {
    switch(action.type) {
      case selectConstans.SHOW_TODO:
        return {
          selectContent: ToDoContainer,
        };
      case selectConstans.SHOW_IN_PROCESS:
        return {
          selectContent: InProcessContainer,
        };
      case selectConstans.SHOW_DONE:
        return {
          selectContent: DoneContainer,
        }  
      default:
        return state;
    }
  }
  
  export default selectReducer;