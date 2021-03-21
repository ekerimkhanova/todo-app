import React from 'react';

import ButtonUI from '../ui/ButtonUI';

import styles from './Button.module.css';

const ButtonContainer = (props) => {
  return <ButtonUI classes={styles} {...props}/>;
}

export default ButtonContainer;
