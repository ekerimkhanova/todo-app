import React, { useCallback, useMemo } from 'react';
import { ItemUI } from '../ui/ItemUI';
import { useDispatch } from 'react-redux';
import { toggleItemAction, changeItemTextAction, showItemInputAction, disableItemInputAction, removeItemAction, falseItemMenuAction } from  '../../../redux/todosList/todosActions';
import styles from './Item.module.css';
import { TiArrowForwardOutline } from 'react-icons/ti';

export const ItemContainer = ({id, text, toggleElipsis, disabled, optionsList, done}) => {

    const dispatch = useDispatch();

    const handleToggleItemMenu = useCallback( id => {
            dispatch(toggleItemAction(id));
        },
        [dispatch]
    );

    const handleFalseItemMenu = useCallback( (e,id) => {
        e.preventDefault();
        dispatch(falseItemMenuAction(id));
    },
    [dispatch]
);


    const handleChangeItemText = useCallback( (id, text) => {
        dispatch(changeItemTextAction(id, text));
    },
    [dispatch]
    );

    const handleShowItemInput = useCallback( id => {
        dispatch(showItemInputAction(id));
    },
    [dispatch]
    );

    const handleDisableItemInput = useCallback( (e, id) => {
        e.preventDefault();
        dispatch(disableItemInputAction(id));
    },
    [dispatch]
    );

    const handleRemoveItem = useCallback( (e, id) => {
        e.preventDefault();
        dispatch(removeItemAction(id));
    },
    [dispatch]
    );

    const options = useMemo(() => optionsList && optionsList.map((el, i) => <li key={i} onClick={() => el.menuFunction(id)}><TiArrowForwardOutline />{el.menuItem}</li>), 
    [optionsList, id]) 

    return <ItemUI handleDisableItemInput= {handleDisableItemInput}
                   id= {id} 
                   handleChangeItemText= {handleChangeItemText} 
                   text= {text} 
                   disabled= {disabled} 
                   toggleElipsis= {toggleElipsis} 
                   handleToggleItemMenu= {handleToggleItemMenu} 
                   handleShowItemInput= {handleShowItemInput}
                   options= {options}
                   done= {done} 
                   handleRemoveItem= {handleRemoveItem} 
                   classes= {styles} 
                   handleFalseItemMenu= {handleFalseItemMenu} />
}
