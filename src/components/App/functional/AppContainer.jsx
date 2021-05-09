import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from '../../../hook/useMedia';
import { openModalAction } from '../../../redux/modal/modalActions';
import { getSelectedContentSelector } from '../../../redux/select/selectSelectors';
import AppUI from '../ui/AppUI';
import './App.css';

const AppContainer = () => {

  const matches560 = useMedia('(max-width: 560px)');

  const showContent = useSelector(getSelectedContentSelector);

  const dispatch = useDispatch();
  
  const handleOpenModal = useCallback(() => {
    dispatch(openModalAction())
  }, [dispatch]);

  return <AppUI handleOpenModal= {handleOpenModal} mobileScreen= {matches560} ShowContent={showContent} />
}

export default AppContainer;
