import axios from 'axios';
import actions from './giftActions';

const port = 'http://localhost:5000/';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI1ZmQ3YzY0MzA1ZWIyMTUwYjAwMmRjNTYiLCJpYXQiOjE2MDc5Nzg2OTAsImV4cCI6MTYwODE1MTQ5MH0.MjiV-6iBMs-iOALSI7EmAvCaMR_UY5yiKelsSk2gmD4';

axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const getAllGifts = () => async dispatch => {
  dispatch(actions.getAllGiftsRequest());
  try {
    const response = await axios.get(`${port}api/gifts/`);
    dispatch(actions.getAllGiftsSuccess(response.data));
  } catch (error) {
    dispatch(actions.getAllGiftsError(error));
  }
};

const addGift = gift => async dispatch => {
  dispatch(actions.createGiftRequest());
  try {
     console.log(gift);
    const response = await axios.post(`${port}api/gifts/`, { ...gift });
    dispatch(actions.createGiftSuccess(response.data));
  } catch (error) {
    dispatch(actions.createGiftError(error.message));
  }
};

const updateGift = (data, id) => async dispatch => {
  dispatch(actions.updateGiftRequest());
  try {
    await axios.patch(`${port}api/gifts/${id}`, data).then(res => {
      dispatch(actions.updateGiftSuccess(res.data));
    });
  } catch (error) {
    dispatch(actions.updateGiftError(error.message));
  }
};

const deleteGift = id => async dispatch => {
  dispatch(actions.deleteGiftRequest());
  try {
    await axios.delete(`${port }api/gifts/${id}`).then(() => {
      dispatch(actions.deleteGiftSuccess(id));
    });
  } catch (error) {
    dispatch(actions.deleteGiftError(error.message));
  }
};

export {
  getAllGifts,
  addGift,
  updateGift,
  deleteGift,
};
