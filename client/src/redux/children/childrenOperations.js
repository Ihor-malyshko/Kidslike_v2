import axios from 'axios';
import {
  createChildrenRequest,
  createChildrenSuccess,
  createChildrenError,
  changeChildrenMarkRequest,
  changeChildrenMarkSuccess,
  changeChildrenMarkError,
  getAllChildrenRequest,
  getAllChildrenSuccess,
  getAllChildrenError,
} from './childrenActions';
const port = 'http://localhost:5000/';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZmQ3YTc2YWJiMzczNDBiYjcxYTQxYWEiLCJpYXQiOjE2MDc5NzMyMjksImV4cCI6MTYwODE0NjAyOX0.lKRAeF8D-g1r7HCq-1Ngjm_cTsb7vFzQBjpxQcdm-04';
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const getAllChildren = () => async dispatch => {
  dispatch(getAllChildrenRequest());
  try {
    const response = await axios.get(`${port}api/childs/`);
    console.log(response)
    dispatch(getAllChildrenSuccess(response.data));
  } catch (error) {
    dispatch(getAllChildrenError(error));
  }
};

const addChildren = children => async dispatch => {
  dispatch(createChildrenRequest());
  try {
    console.log(children);
    const response = await axios.post(`${port}api/childs/`, { ...children });
    dispatch(createChildrenSuccess(response.data));
  } catch (error) {
    dispatch(createChildrenError(error.message));
  }
};

const updateChildren = (data, id) => async dispatch => {
  dispatch(changeChildrenMarkRequest());
  try {
    await axios.patch(`${port}api/childs/${id}`, data).then(res => {
      dispatch(changeChildrenMarkSuccess(res.data));
    });
  } catch (error) {
    dispatch(changeChildrenMarkError(error.message));
  }
};

export default {
  getAllChildren,
  addChildren,
  updateChildren,
};
