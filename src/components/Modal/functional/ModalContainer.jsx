import React, { useCallback, useState } from 'react'
import ModalUI from '../ui/ModalUI'
import {useDispatch, useSelector} from "react-redux";
import {getModalSelector} from '../../../redux/modal/modalSelectors';
import {closeModalAction} from '../../../redux/modal/modalActions';
import { addNewItemAction } from '../../../redux/todosList/todosActions';
import { getIdSelector } from '../../../redux/todosList/todosSelectors';
import styles from "./Modal.module.css";

const ModalContainer = () => {

const showModal = useSelector(getModalSelector);
const [value, setValue] = useState('');
const [error, setError] = useState(false)
let id = useSelector(getIdSelector);
let currentId = ++id;

const dispatch = useDispatch();

const handleCloseModal = useCallback(() => {
    dispatch(closeModalAction());
    setValue('');
    setError(false);
  }, [dispatch]);

const handleChangeValue = useCallback((e) => {
    setValue(e.target.value);
    setError(false);
  }, [setValue]);

const  handleAddToDo = useCallback((e)=>{
  e.preventDefault();
  if(!value){
      setError(true);
  }
  else {
      dispatch(addNewItemAction(currentId, value));
      setValue('');
      setError(false);
      dispatch(closeModalAction());
  }
}, [dispatch, value, currentId]) 

return <ModalUI show={showModal} 
                closePopup={handleCloseModal}
                value={value}
                handleChangeValue={handleChangeValue} 
                handleAddToDo={handleAddToDo}
                error={error}
                classes= {styles} />
}

export default ModalContainer
