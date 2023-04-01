import React from 'react';
import styles from './Checkbox.module.scss';

interface Props {
  isChecked: boolean;
  handleState(isChecked: boolean): void
}

const Checkbox: React.FC<Props> = (props) => {
  const { isChecked, handleState } = props;
  const onChangeComplete = () => {
    handleState(!isChecked);
  }

  return (
    <div className={styles.item_check}>
      <label className={styles.lab_check}>
        <input type="checkbox" checked={isChecked} onChange={onChangeComplete}></input>
      </label>
    </div>
  )
}

export default Checkbox;
