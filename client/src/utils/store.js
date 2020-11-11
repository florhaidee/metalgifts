import reducer from './reducers.js';
import { createStore } from 'redux'

const store = createStore(reducer);

export default store;