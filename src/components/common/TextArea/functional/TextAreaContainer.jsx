import React from 'react';

import TextAreaUI from '../ui/TextAreaUI';

import styles from './TextArea.module.css';

const TextAreaContainer = (props) => {
  return <TextAreaUI classes={styles} {...props}/>;
}

export default TextAreaContainer;
