import CommentReducer from './commentReducer';
import NameReducer from './nameReducer';
import ScreenReducer from './screenReducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    comment: CommentReducer,
    name: NameReducer,
    screen: ScreenReducer
});

export default allReducer;