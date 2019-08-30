import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
	detailTitle:'',
	detailContent:''
});

export default (state = defaultState,action)=>{
	switch(action.type){
		case constants.UPDATE_DETAIL_LIST:
			console.log(action);
			////return state.set('conTitle',fromJS(action.arList.title));
			return state.merge({
				detailTitle:fromJS(action.detailTitle),
				detailContent:fromJS(action.detailContent)
				
			})
		default:
			return state;
	}
}