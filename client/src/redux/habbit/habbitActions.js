import { createAction } from '@reduxjs/toolkit';

const createHabbitRequest = createAction('habbit/createHabbitRequest');
const createHabbitSuccess = createAction('habbit/createHabbitSuccess');
const createHabbitError = createAction('habbit/createHabbitError');


const updateHabbitRequest = createAction('habbit/updateHabbitRequest');
const updateHabbitSuccess = createAction('habbit/updateHabbitSuccess');
const updateHabbitError = createAction('habbit/updateHabbitError');


const deleteHabbitRequest = createAction('habbit/deleteHabbitRequest');
const deleteHabbitSuccess = createAction('habbit/deleteHabbitSuccess');
const deleteHabbitError = createAction('habbit/deleteHabbitError');


const getAllHabitsRequest = createAction('habbit/getAllHabitsRequest');
const getAllHabitsSuccess = createAction('habbit/getAllHabitsSuccess');
const getAllHabitsError = createAction('habbit/getAllHabitsError');

const checkHabbitRequest = createAction('habbit/checkHabbitRequest');
const checkHabbitSuccess = createAction('habbit/checkHabbitSuccess');
const checkHabbitError = createAction('habbit/checkHabbitError');

export default {
    createHabbitRequest,
    createHabbitSuccess,
    createHabbitError,
    updateHabbitRequest,
    updateHabbitSuccess,
    updateHabbitError,
    deleteHabbitRequest,
    deleteHabbitSuccess,
    deleteHabbitError,
    getAllHabitsRequest,
    getAllHabitsSuccess,
    getAllHabitsError,
    checkHabbitRequest,
    checkHabbitSuccess,
    checkHabbitError,
}