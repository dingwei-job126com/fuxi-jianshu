import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused:false,
	searchList:[],
	mouseIn:false,
	page:1,//当前页
	totalPage:1  //这些数据一共有多少页  总数据条数/每页显示的条数=页数，30条数据/每页10条 = 3页
})

export default (state = defaultState,action)=>{
	switch(action.type){
		case constants.UPDATE_FOCUSED_TRUE:
			return state.set("focused",true);
		case constants.UPDATE_FOCUSED_FALSE:
			return state.set("focused",false);

		//鼠标经过离开
		case constants.CHANGE_MOUSE_ENTER:
			return state.set('mouseIn',true);
		case constants.CHANGE_MOUSE_LEAVE:
			return state.set('mouseIn',false);

		//改变热门搜索默认数据	
		case constants.CHANGE_SEARCH_LIST:
			return state.set('searchList',action.searchList).set('totalPage',action.totalPage)
		
		case constants.UPDATE_CHANGE_PAGE:
			return state.set('page',action.page);

		default:
			return state;

	}
}