import React from 'react';
import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  type: 'submit' | 'reset' | 'button';
  className: string;
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

const Button:  React.FC<Props> = (props) => {
  const { children, type, className, onClick } = props;
  return (
    <button type={type} className={`${className} ${styles[className]}`} onClick={onClick}>
      { children }
    </button>
  )
}

export default Button;
