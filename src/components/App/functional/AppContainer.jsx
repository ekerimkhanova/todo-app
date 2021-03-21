import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalActions';
import AppUI from '../ui/AppUI';
import './App.css';

const AppContainer = () => {

const [mobileScreen, setMobileScreen] = useState(false);

const handleMobileChange = useCallback(() => {
    if (window.innerWidth < 560) {
      setMobileScreen(true);
    }
  else{
    setMobileScreen(false);
  }
}, []);

const dispatch = useDispatch();
const handleOpenModal = useCallback(() => {
    dispatch(openModal())
  }, [dispatch]);

useEffect(()=>{
  window.addEventListener('resize', handleMobileChange);
  
  return () => {
    window.removeEventListener('resize', handleMobileChange);
  }
}, [handleMobileChange]);
  

  return <AppUI handleOpenModal= {handleOpenModal} mobileScreen= {mobileScreen} />
}

export default AppContainer;
