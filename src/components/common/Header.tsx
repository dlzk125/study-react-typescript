import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC<object> = (props) => {
  return (
    <header className={styles['doc-header']} {...props}>
      <h1 className={styles.tit_head}>TodoList</h1>
    </header>
  )
}

export default Header;
