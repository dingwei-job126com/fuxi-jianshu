import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
	conTitle:'',
	content:'',
	id:''
});

export default (state = defaultState,action)=>{
	switch(action.type){
		case constants.UPDATE_DETAIL_LIST:
			console.log(action.arList.title);
			////return state.set('conTitle',fromJS(action.arList.title));
			return state.merge({
				conTitle:fromJS(action.arList.title),
				content:fromJS(action.arList.content),
				id:fromJS(action.arList.id)
			})
		default:
			return state;
	}
}