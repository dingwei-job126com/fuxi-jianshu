import * as constants from './constants';


const defaultState = {
	focused:false
}
export default (state = defaultState,action)=>{
	if (action.type === constants.UPDATE_FOCUSED_TRUE) {
		const newsFocused = JSON.parse(JSON.stringify(state));
		newsFocused.focused = true;
		return newsFocused;

	}
	if (action.type === constants.UPDATE_FOCUSED_FALSE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.focused = false;
		return newState;
	}
	return state;
}