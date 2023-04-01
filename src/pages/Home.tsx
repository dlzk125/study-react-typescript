import React from 'react';
import Loading from '../components/common/Loading';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const Home: React.FC = () => {
  // const { isLoading, data } = JSON.parse(JSON.stringify(useQuery({queryKey: ['todoList'], queryFn: getTodoList})));
  // const queryClient = useQueryClient();

  // const mutationTodoList = useMutation({
  //   mutationFn: (data: TodoListData): any => fetchTodoList(data),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({queryKey: ['todoList']});
  //   },
  // });

  // const fetchTodoListData = (data: TodoListData) => {
  //   mutationTodoList.mutate(data);
  // }

  return (
    <div>
      {/* <Loading/> */}
      {/* {
        isLoading ?
          <Loading/> :
          <div></div>
          // <Todo data={data} fetchTodoListData={fetchTodoListData} />
      } */}
    </div>
  )
}

export default Home;
