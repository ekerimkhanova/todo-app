import React from 'react';
import Modal from 'react-modal';
import ButtonContainer from '../../common/Button/functional/ButtonContainer';
import { VscAdd } from 'react-icons/vsc';
import { VscChromeClose } from 'react-icons/vsc';
import TextAreaContainer from '../../common/TextArea/functional/TextAreaContainer';
import { TitleConatiner } from '../../common/Title/functional/TitleConatiner';

const ModalUI = ({ show, closePopup, value, handleAddToDo, handleChangeValue, error, classes }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={closePopup}
            ariaHideApp={false}
            className={classes.modal}
            overlayClassName={classes.modalOverley}>
            <TitleConatiner value='Add Task' />
            <form onSubmit={handleAddToDo}>
                <TextAreaContainer value={value} onChange={handleChangeValue} className={classes.modalTextarea} placeholder='Write something...' />
                {error && <div>Enter task</div>}
                <div>
                    <ButtonContainer text='Save' type='submit' className={classes.buttonAccept} />
                    <ButtonContainer text='Cancel' onClick={closePopup} className={classes.buttonCancel} />
                </div>
            </form>
        </Modal>
    )
}

export default ModalUI