import React from 'react';
import styles from './Loading.module.scss';
import imgURL from 'assets/img/pika.webp';
import { useQueryClient } from 'react-query';

const Loading: React.FC = () => {
  const queryClient = useQueryClient();
  const isLoading: Boolean|undefined = queryClient.getQueryData('isLoading');

  return (
    <div className={styles['lds-dual-wrapper']} style={`display: ${ isLoading ? 'block' : 'none' }` as React.CSSProperties}>
      <div className={styles['lds-dual-ring']}>
        <img src={imgURL} alt="Loading..." />
      </div>
    </div>
  )
}

export default Loading;
