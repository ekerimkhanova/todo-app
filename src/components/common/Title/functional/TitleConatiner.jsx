import React from 'react';
import { TitleUI } from '../ui/TitleUI';
import style from './Title.module.css';

export const TitleConatiner = ({value, className}) => <TitleUI value={value} className={className} classes={style} />
