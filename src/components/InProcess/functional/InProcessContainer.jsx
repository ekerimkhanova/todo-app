import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosListSelector } from '../../../redux/todosList/todosSelectors';
import { ItemContainer } from '../../Item/functional/ItemContainer';
import InProcessUI from '../ui/InProcessUI';
import {changeItemStatusDoneAction, changeItemStatusTodoAction} from '../../../redux/todosList/todosActions';

const InProcessContainer = () => {

    const todosList = useSelector(getTodosListSelector);

    const dispatch = useDispatch();

    const handleChangeItemStatusTodo = useCallback( id => {
        dispatch(changeItemStatusTodoAction(id));
    },
    [dispatch]
    );

    const handleChangeItemStatusDone = useCallback( id => {
        dispatch(changeItemStatusDoneAction(id));
    },
    [dispatch]
    );

    const inProcessOptions = useMemo(() => [
        {
        menuItem: 'ToDo',
        menuFunction: handleChangeItemStatusTodo,
        },
        {
        menuItem: 'Done',
        menuFunction: handleChangeItemStatusDone,
        }
    ], [handleChangeItemStatusTodo, handleChangeItemStatusDone]);

    const inProcess = useMemo(()=> todosList.map( el => el.inProcess && (
            <ItemContainer id= {el.id}
                           text= {el.text}
                           toggleElipsis= {el.toggleElipsis}
                           disabled= {el.disabled}
                           optionsList= {inProcessOptions} 
                           done= {el.done} 
                           key= {el.id} />)     
        ), [todosList, inProcessOptions]) 

    return  <InProcessUI inProcess={inProcess} />
}

export default InProcessContainer
