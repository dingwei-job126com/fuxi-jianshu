//import {combineReducers} from 'redux';


import { combineReducers } from 'redux-immutable'; 

import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as loginReducer} from '../pages/login/store';
import {reducer as detailReducer} from '../pages/detail/store';

//此时 下面定义的reducer就是一个immuable对象了，因为上面引用的是redux-immutable。
const reducer = combineReducers({
	header:headerReducer,
	home:homeReducer,
	login:loginReducer,
	detail:detailReducer
})

export default reducer;