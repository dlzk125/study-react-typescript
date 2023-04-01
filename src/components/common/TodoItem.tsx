import React from 'react';
import styles from './TodoItem.module.scss';
import IconDelete from '../../components/icon/IconDelete';
import IconEdit from '../../components/icon/IconEdit';
import InputComm from './InputComm';
import Checkbox from './Checkbox';
import Button from './Button';
import { useState } from 'react';
import { TodoItemData } from '../../interface/todo';

interface Props {
  todoData: TodoItemData;
  deleteTodoItem(targetId: number): void;
  changeTodoItem(targetIdx: number, changeData: Partial<TodoItemData>): void;
  index: number;
}

const TodoItem: React.FC<Props> = (props) => {
  const { todoData, deleteTodoItem, changeTodoItem, index } = props;
  const {id, title, isComplete} = todoData;
  const [isEditMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(title);
  const onClickDeleteBtn = () => {
    deleteTodoItem(id);
  }
  
  const onClickEditBtn = () => {
    if (isEditMode && !!editText) {
      changeTodoItem(index, {title: editText});
    }
    setEditMode(!isEditMode);
  }

  const onChangeEditText = (text: string) => {
    setEditText(text);
  }

  const onChangeComplete = (toChangeState: boolean) => {
    changeTodoItem(index, {isComplete: toChangeState});
  }
  

  return (
    <li className={`${styles.list_item} ${isComplete ? styles.complete : ''}`}>
      <Checkbox isChecked={isComplete} handleState={onChangeComplete}/>
      {
        isEditMode ? 
        <InputComm placeholder="Todo를 입력해주세요." value={editText} handleState={onChangeEditText}/> :
        <p className='desc_todo'>{title}</p>
      }
      <div className={styles.wrap_btn}>
        {
          isComplete ? null :
            <Button type="button" className='btn_icon' onClick={onClickEditBtn}>
              <IconEdit/>
            </Button>
        }
        <Button type="button" className='btn_icon' onClick={onClickDeleteBtn}>
          <IconDelete/>
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;
