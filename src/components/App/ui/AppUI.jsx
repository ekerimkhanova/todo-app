import React from 'react';
import SelectContainer from '../../Select/functional/SelectContainer';
import { TitleConatiner } from '../../common/Title/functional/TitleConatiner';
import ToDoContainer from '../../ToDo/functional/ToDoContainer';
import InProcessContainer from '../../InProcess/functional/InProcessContainer';
import DoneContainer from '../../Done/functional/DoneContainer';
import ModalContainer from '../../Modal/functional/ModalContainer';
import ButtonContainer from '../../common/Button/functional/ButtonContainer';

const AppUI = ({ handleOpenModal, mobileScreen, ShowContent }) => {
  return (
    <>
      <ButtonContainer text='+ Task' onClick={handleOpenModal} className='button-fixed' />
      <h1 className='main-title'>TODO APP</h1>
      { mobileScreen ? (
        <>
          <SelectContainer />
          {ShowContent && <ShowContent />}
        </>
        )
        :
        (
          <div className="wrapper">
            <div>
              <TitleConatiner value='TODO' />
              <ToDoContainer />
            </div>
            <div>
              <TitleConatiner value='IN PROCESS' />
              <InProcessContainer />
            </div>
            <div>
              <TitleConatiner value='DONE' />
              <DoneContainer />
            </div>
          </div>
        )
      }
      <ModalContainer />
    </>
  );
}

export default AppUI;
