import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ToDoUI from '../ui/ToDoUI';
import {getTodosListSelector} from '../../../redux/todosList/todosSelectors';
import { changeItemStatusInProcessAction, changeItemStatusDoneAction } from '../../../redux/todosList/todosActions';
import { ItemContainer } from '../../Item/functional/ItemContainer';

const ToDoContainer = () => {

    const todosList = useSelector(getTodosListSelector);

    const dispatch = useDispatch();

    const handleChangeItemStatusInProcess = useCallback( id => {
        dispatch(changeItemStatusInProcessAction(id));
    },
    [dispatch]
    );

    const handleChangeItemStatusDone = useCallback( id => {
        dispatch(changeItemStatusDoneAction(id));
    },
    [dispatch]
    );

    const todoOptions = useMemo(() => [
        {
        menuItem: 'In process',
        menuFunction: handleChangeItemStatusInProcess,
        },
        {
        menuItem: 'Done',
        menuFunction: handleChangeItemStatusDone,
        }
    ], [handleChangeItemStatusInProcess, handleChangeItemStatusDone])

    const todos = useMemo(()=> todosList.map( el => (el.inProcess === false && el.done ===false) && (
            <ItemContainer id= {el.id}
                           text= {el.text}
                           toggleElipsis= {el.toggleElipsis}
                           disabled= {el.disabled}
                           optionsList= {todoOptions} 
                           done= {el.done} 
                           key= {el.id} />)     
        ), [todosList, todoOptions]);
        return <ToDoUI todos= {todos}/>
}

export default ToDoContainer
