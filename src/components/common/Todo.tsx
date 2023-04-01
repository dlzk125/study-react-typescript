import React from 'react';
import { useMemo, useState } from 'react';
import Button from './Button';
import InputComm from './InputComm';
import styles from './Todo.module.scss';
import Tab from './Tab';
import TodoItem from './TodoItem';
import { TodoItemData, TodoListData } from '../../interface/todo';

interface Props {
  data: TodoListData;
  fetchTodoListData(data: TodoListData): void;
}

const Todo: React.FC<Props> = (props) => {
  const { data: {list, lastTodoId}, fetchTodoListData = () => {} } = props;
  // const [todoList, setTodoList] = useState(list);
  const [addText, setAddText] = useState('');
  const [tabState, setTabState] = useState('ALL');
  const tabStates = [
    { state: 'ALL', text: '전체' },
    { state: 'COMPLETE', text: '완료' },
    { state: 'INCOMPLETE', text: '미완료' }
  ]
  
  const getFilteredTodoListData = (currState: string, targetTodoList: TodoListData['list']) => {
    if (currState === 'ALL') {
      return targetTodoList;
    }
    
    return targetTodoList.filter(({isComplete}: TodoItemData) => {
      const state = isComplete ? 'COMPLETE' : 'INCOMPLETE';
      return state === currState;
    });
  }
  
  const filteredTodoList = useMemo(() => {
    return getFilteredTodoListData(tabState, list);
  }, [list, tabState]);
  const currTabIdx = useMemo(() => {
    return tabStates.findIndex(({state}) => state === tabState);
  }, [tabState])
  const isNoData = useMemo(() => {
    return !filteredTodoList || filteredTodoList.length === 0;
  }, [filteredTodoList])
  let currLastTodoId = lastTodoId ?? 0;
  
  const addTodo = () => {
    if (!addText) {
      return alert('텍스트를 추가해주세요.');
    }
    
    if (currLastTodoId !== null) currLastTodoId++;

    addTodoItem({
      id: currLastTodoId, title: addText, isComplete: false
    })
  }
  
  const addTodoItem = (todoItem: TodoItemData) => {
    fetchTodoListData({
      lastTodoId: currLastTodoId,
      list: [...list, todoItem]
    });
  }
  
  const deleteTodoItem = (targetId: number) => {
    fetchTodoListData({
      lastTodoId: currLastTodoId,
      list: list.filter(({id}) => id !== targetId)
    });
  }
  
  const changeTodoItem = (targetIdx: number, changeData: Partial<TodoItemData>) => {
    const changedData = list.map((todoItem, idx) => {
      if(idx !== targetIdx) {
        return todoItem;
      }
      
      return {...todoItem, ...changeData}
    })

    fetchTodoListData({
      lastTodoId: currLastTodoId,
      list: changedData
    });
  }

  const onClickTab = (state: string) => {
    setTabState(state);
    // setTodoList(getFilteredTodoListData(state, list));
  }
  return (
    <div className={styles.content_todo}>
      <Tab list={tabStates} currTabIdx={currTabIdx} handleState={onClickTab} />
      <div className={styles.wrap_add}>
        <InputComm placeholder="Todo를 입력해주세요." value={addText} handleState={setAddText}/>
        <Button type="button" className='btn_primary' onClick={addTodo}>추가</Button>
      </div>
      {
        isNoData ?
        <p className={styles.no_data}>예정된 일정이 없습니다.<br/>추가해주세요.</p> :
        <ol className={styles.list_todo}>
          {
            filteredTodoList.map((todoItem, index) => 
              <TodoItem
                key={todoItem.id}
                todoData={todoItem}
                index={index}
                changeTodoItem={changeTodoItem}
                deleteTodoItem={deleteTodoItem}
              />
            )
          }
        </ol>
      }
    </div>
  );
}

export default Todo;
