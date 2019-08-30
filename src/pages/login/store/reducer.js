import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
	login:false
});

export default (state = defaultState,action)=>{
	switch(action.type){
		case constants.GET_LOGIN_STATE:
			return state.set('login',fromJS(action.login));
		case constants.GET_LOG_OUT:
			return state.set('login',fromJS(action.login));
		default:
			return state
	}
	
}