import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, editField2, removeService, switchAction } from '../../actions/actionCreators';

export default function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const item = useSelector(state => state.serviceAdd);

    const dispatch = useDispatch();

    const handleRemove = id => {
        if (item.command == "add") {
            dispatch(removeService(id))
        }
        else {
            dispatch(changeServiceField('name', ''));
            dispatch(changeServiceField('price', ''));
            dispatch(removeService(id));
            dispatch(switchAction("add"));
        }

    };

    function handleEdit(id: string, name: string, price: string) {
        dispatch(editField2(id, name, price));
    };

    return (
        <ul>
            {items.map(o => (
                <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={() => handleEdit(o.id, o.name, o.price)}>✎</button>
                    <button onClick={() => handleRemove(o.id)}>✕</button>
                </li>
            ))}
        </ul>
    )
}
