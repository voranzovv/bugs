import { createStore } from 'redux';
import reducer from './bug';

export default function configureStore() {
    const store = createStore(reducer);
    return store;
}
