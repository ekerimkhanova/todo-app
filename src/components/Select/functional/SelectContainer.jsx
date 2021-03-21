import React from 'react'
import { useHistory } from 'react-router-dom';
import SelectUI from '../ui/SelectUI';
import styles from './Select.module.css';

const SelectContainer = () => {

  let history = useHistory();

  function handleChangeValue(e) {
    history.push(`${e.target.value}`);
  }

  return <SelectUI classes={styles} handleChangeValue={handleChangeValue} />
}

export default SelectContainer
