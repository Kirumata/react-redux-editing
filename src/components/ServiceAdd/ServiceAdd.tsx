import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, switchAction, editField, getNewID, removeService } from '../../actions/actionCreators';

export default function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();
    const handleChange = evt => {
        const { name, value } = evt.target;
        dispatch(changeServiceField(name, value));
    }

    const clearFields = () => {
        dispatch(changeServiceField('name', ''));
        dispatch(changeServiceField('price', ''));
    }

    const handleCancel = () => {
        dispatch(switchAction("add"));
        clearFields();
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if (item.command === "add") {
            dispatch(getNewID());
            dispatch(addService(item.currentId, item.name, item.price));
        }
        else {
            dispatch(removeService(item.currentId));
            dispatch(editField(item.currentId, item.name, item.price));
            dispatch(switchAction("add"))
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' onChange={handleChange} value={item.name} />
                <input name='price' onChange={handleChange} value={item.price} />
                <button type='submit'>Save</button>
            </form>
            {item.command === "edit" && <button onClick={handleCancel}>Cancel</button>}
        </div>
    );
}