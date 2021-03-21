import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { getTodosListSelector } from '../../../redux/todosList/todosSelectors';
import { ItemContainer } from '../../Item/functional/ItemContainer';
import DoneUI from '../ui/DoneUI'

const DoneContainer = () => {

    const todosList = useSelector(getTodosListSelector);

    const done = useMemo(()=> todosList.map( el => el.done && (
            <ItemContainer id= {el.id}
                           text= {el.text}
                           disabled= {el.disabled}
                           done= {el.done} 
                           key= {el.id} />)     
        ), [todosList]) 

    return <DoneUI done={done} />
}

export default DoneContainer
