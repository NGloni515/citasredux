import {SHOW_CITAS, DELETE_CITAS, ADD_CITAS } from './types';

export const getCitas = () => {
    return {
        type: SHOW_CITAS
    }
}

export const addCita = (cita) => {
    return{
        type: ADD_CITAS,
        payload: cita
    }
}

export const deleteCita = (id) => {
    return{
        type: DELETE_CITAS,
        payload: id
    }
}