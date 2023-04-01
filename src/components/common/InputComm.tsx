import React from 'react';
import styles from './InputComm.module.scss';

interface Props {
  value: string;
  handleState(value: string): void;
  placeholder: string;
}

const InputComm: React.FC<Props> = (props) => {
  const { value, handleState, placeholder } = props;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    handleState(value);
  }
  return (
    <div className={`item_form ${styles.item_form}`}>
      <label>
        <input
          className={styles.tf_comm}
          name="username"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  ) 
}

export default InputComm;
