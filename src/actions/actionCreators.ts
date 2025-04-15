import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, EDIT_SERVICE2, SWITCH_ACTION, NEW_ID, SWITCH_ID } from './actionTypes';
export function addService(id: string, name: string, price: string) {
    return { type: ADD_SERVICE, payload: { id, name, price } };
}
export function removeService(id: string) {
    return { type: REMOVE_SERVICE, payload: { id } };
}


export function editField(id: string, name: string, price: string) {
    return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function switchAction(command: "edit" | "add") {
    return { type: SWITCH_ACTION, payload: { command } };
}

export function editField2(id: string, serviceName: string, price: string) {
    return { type: EDIT_SERVICE2, payload: { id, serviceName, price } };
}

export function changeServiceField(name: string, value: string) {
    return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function getNewID() {
    return { type: NEW_ID };
}

export function switchID(command: "edit" | "add", currentID: string) {
    return { type: SWITCH_ID, payload: { command, currentID } };
}