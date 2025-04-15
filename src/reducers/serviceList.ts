import { nanoid } from 'nanoid';
import { ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes'
const initialState = [
    { id: nanoid(), name: 'Замена стекла', price: 21000 },
    { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];
export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            {
                const { id, name, price } = action.payload;
                return [...state, {
                    id: id, name, price:
                        Number(price)
                }];
            }
        case REMOVE_SERVICE:
            const { id } = action.payload;
            return state.filter(service => service.id !== id);

        case EDIT_SERVICE:
            {
                const { id, name, price } = action.payload;
                state.filter(service => service.id !== id);
                return [...state, {
                    id: id, name, price:
                        Number(price)
                }];
            }
        default:
            return state;
    }
}