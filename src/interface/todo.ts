
interface TodoItemData {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TodoListData {
  lastTodoId: number|null;
  list: TodoItemData[];
}

export type { TodoListData, TodoItemData }
