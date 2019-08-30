import * as constants from './constants';

export const getLoginState = ()=>({
	type:constants.GET_LOGIN_STATE,
	login:true
})

export const getLogOut = ()=>({
	type:constants.GET_LOG_OUT,
	login:false
})