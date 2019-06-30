import { SHOW_CITAS, DELETE_CITAS, ADD_CITAS } from '../actions/types';

// state inicial, cada reducer debe tener su propio state
const initialState = {
    citas: [
        {
            id: 0,
            fecha: "10-20-30",
            hofa: "10:30",
            mascota: "firulais",
            propietario: "angeloni",
            sintomas: "ya no quiere comer"
        },
        {
            id: 1,
            fecha: "10-20-30",
            hofa: "10:30",
            mascota: "firulais2",
            propietario: "angeloni",
            sintomas: "ya no quiere comer"
        }
     ]
}

//reducer siempre regresa el state actual por defecto
export default function(state = initialState, action){
    switch(action.type){
        case SHOW_CITAS:
            return{
                ...state
            }
        case ADD_CITAS:
            return{
                ...state,
                citas: [...state.citas, action.payload] 
            }
        case DELETE_CITAS:
                return{
                    ...state,
                    citas: state.citas.filter(cita => cita.id !== action.payload)
                }
        default:
            return state;
    }
}