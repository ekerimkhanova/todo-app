import React from 'react';
import { selectConstans } from '../../../redux/select/selectConstans';

const SelectUI = ({ handleChangeValue, classes, value }) => {
  return (
    <select onChange={handleChangeValue} className={classes['select']} value={value}>
      <option value={selectConstans.SHOW_TODO}>TODO</option>
      <option value={selectConstans.SHOW_IN_PROCESS}>IN PROCESS</option>
      <option value={selectConstans.SHOW_DONE}>DONE</option>
    </select>
  )
}

export default SelectUI
