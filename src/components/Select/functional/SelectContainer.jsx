import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { showContentAction } from '../../../redux/select/selectActions';
import { selectConstans } from '../../../redux/select/selectConstans';
import SelectUI from '../ui/SelectUI';
import styles from './Select.module.css';

const SelectContainer = () => {

  const [value, setValue] = useState(selectConstans.SHOW_TODO);
  const dispatch = useDispatch();

  const handleChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  useEffect(()=>{
    dispatch(showContentAction(value));
  }, [value, dispatch])

  return <SelectUI classes={styles} handleChangeValue={handleChangeValue} value={value} />
}

export default SelectContainer
