import { combineReducers } from "redux";
import IndexReducer from './indexReducer';
import HeaderReducer from './headerReducer';

const RootReducer = combineReducers({
    IndexReducer,
    HeaderReducer
});

export default RootReducer;