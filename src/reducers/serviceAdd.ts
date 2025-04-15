import { nanoid } from 'nanoid';
import { CHANGE_SERVICE_FIELD, EDIT_SERVICE2, NEW_ID, SWITCH_ACTION } from '../actions/actionTypes'

const initialState = { name: '', price: '', command: "add", currentId: nanoid() };

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        case EDIT_SERVICE2:
            {
                const { id, serviceName, price } = action.payload;

                state.currentId = id;
                state.name = serviceName;
                state.price = price;
                state.command = "edit";
                return { ...state };
            }
        case SWITCH_ACTION:
            {
                const command = action.payload.command;
                state.command = command;
                return {...state};
            }
        case NEW_ID:
            {
                state.currentId = nanoid();
                return {...state};
            }
        default:
            return state;
    }
}