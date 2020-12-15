import axios from 'axios';
import actions from './taskActions';

// const domain = process.env.DOMAIN_ADDRESS;
//todo token
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZmQ2Yjc2NDA1NmUyZDM2NmNhZWMxZTUiLCJpYXQiOjE2MDc5MDczMDksImV4cCI6MTYwODA4MDEwOX0.33_nHnSAAnl-cLdwNj8rws3Obrcq3x733s_Fu9caLmA';
// axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const getAllTasks = () => async dispatch => {
  dispatch(actions.getAllTasksRequest());
  try {
    const response = await axios.get(`/api/tasks/`);
    console.log(response);
    dispatch(actions.getAllTasksSuccess(response.data));
  } catch (error) {
    dispatch(actions.getAllTasksError(error));
  }
};

const addTask = Task => async dispatch => {
  dispatch(actions.createTaskRequest());
  try {
    console.log(Task);
    const response = await axios.post(`/api/tasks/`, { ...Task });
    dispatch(actions.createTaskSuccess(response.data));
  } catch (error) {
    dispatch(actions.createTaskError(error.message));
  }
};

const updateTask = (data, id) => async dispatch => {
  dispatch(actions.updateTaskRequest());
  try {
    await axios.patch(`/api/tasks/${id}`, data).then(res => {
      dispatch(actions.updateTaskSuccess(res.data));
    });
  } catch (error) {
    dispatch(actions.updateTaskError(error.message));
  }
};

const deleteTask = id => async dispatch => {
  dispatch(actions.deleteTaskRequest());
  try {
    await axios.delete(`/api/tasks/${id}`).then(() => {
      dispatch(actions.deleteTaskSuccess(id));
    });
  } catch (error) {
    dispatch(actions.deleteTaskError(error.message));
  }
};

export default {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
};
