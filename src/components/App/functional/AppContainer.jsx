import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useMedia } from '../../../hook/useMedia';
import { openModal } from '../../../redux/modal/modalActions';
import AppUI from '../ui/AppUI';
import './App.css';

const AppContainer = () => {

  const matches560 = useMedia('(max-width: 560px)');

  const dispatch = useDispatch();
  const handleOpenModal = useCallback(() => {
    dispatch(openModal())
  }, [dispatch]);

  return <AppUI handleOpenModal= {handleOpenModal} mobileScreen= {matches560} />
}

export default AppContainer;
