import React from 'react';
import Button from './Button';
import styles from './Tab.module.scss';


interface Props {
  list: {text: string, state: string}[];
  currTabIdx: number;
  handleState(state: string): void;
}

const Tab: React.FC<Props> = (props) => {
  const { list, currTabIdx, handleState } = props;

  const onClickTab = (state: string) => {
    handleState(state);
  };

  return (
    <div className={styles.tab_basic}>
      <ul className={styles.list_tab}>
        {
          list.map(({text, state}, idx) => 
            <li key={`${text}${idx}`} className={currTabIdx === idx ? styles.on : ''}>
              <Button
                type="button"
                className={styles.link_tab}
                onClick={onClickTab.bind(null, state)}
              >
                {text}
              </Button>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Tab;
