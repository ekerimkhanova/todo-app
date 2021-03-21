import React from 'react'
import { VscChromeClose } from 'react-icons/vsc';
import { RiEdit2Line } from 'react-icons/ri';
import { MdCheckCircle } from 'react-icons/md';
import TextAreaContainer from '../../common/TextArea/functional/TextAreaContainer';

export const ItemUI = ({ handleDisableItemInput, id, handleChangeItemText, text, disabled,
    toggleElipsis, handleToggleItemMenu, handleShowItemInput, options,
    done, handleRemoveItem, classes, handleFalseItemMenu }) => {

    return (
        <form className={classes.form} onSubmit={e => handleDisableItemInput(e, id)}>
            <TextAreaContainer className={classes.itemTextarea} autoFocus={true} value={text} onChange={e => handleChangeItemText(id, e.target.value)} disabled={disabled} />
            {(!disabled) && <button type='submit' className={classes.buttonSubmit}><MdCheckCircle /></button>}
            <div className={classes.optionsContainer}>
                <button onClick={e => handleRemoveItem(e, id)} className={classes.buttonClose}><VscChromeClose /></button>
                {!done && (
                    <ul tabIndex="0" className={toggleElipsis === true ? `${classes.active}` : ''} onClick={() => handleToggleItemMenu(id)} onBlur={(e) => handleFalseItemMenu(e, id)}>...
                        <div>
                            <li onClick={() => handleShowItemInput(id)}><RiEdit2Line /> Edit</li>
                            {options}
                        </div>
                    </ul>
                )}
            </div>
        </form>
    )
};
