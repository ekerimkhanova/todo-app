import React from 'react';
import { routes } from '../../../constans/routes';

const SelectUI = ({ handleChangeValue, classes }) => {
  return (
    <select onChange={handleChangeValue} className={classes['select']}>
      <option value={routes.todo}>TODO</option>
      <option value={routes.inProcess}>IN PROCESS</option>
      <option value={routes.done}>DONE</option>
    </select>
  )
}

export default SelectUI
