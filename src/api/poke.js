import axios from 'axios';

/**
 * GET todoList
 * @returns {Object}
 */
const getTodoList = async (params) => {
  try {
    const apiURL = '/pokemon';
    const res = await axios.get(apiURL, params);
    const { success, data = {} } = res;

    if (success) {
      return data;
    }
  } catch (error) {
    console.error(error);
    return {};
  }
}

// /**
//  * POST todoList
//  * @returns {boolean}
//  */
// const fetchTodoList = (params) => {
//   const apiURL = baseURL + 'list';
//   try {
//     const res = setItem(apiURL, JSON.stringify({
//       success: true, data: params
//     })) ?? {};
//     const { success } = res;

//     return success;
//   } catch (error) {
//     console.error(error);
//     return {};
//   }
// }

export { getTodoList };
