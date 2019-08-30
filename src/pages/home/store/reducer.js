import * as constants from './constants';
import { fromJS } from 'immutable';


const defaultState = fromJS({
	articleList:[],
	writer:[],
	articlePage:1,
	articlePageTotal:1,
	writerPage:1,
	writerPageTotal:1,
	scrollState:false
})

export default (state = defaultState,action)=>{
	switch(action.type){
		case constants.CHANGE_HOME_DATA:
		//从接口中获取到的数据时普通js对象，不能直接set，必须将其装换成immutable对象才行
			//return state.set('articleList',fromJS(action.articleList)).set('writer',fromJS(action.writer));
			return state.merge({
				articleList:fromJS(action.articleList),
				writer:fromJS(action.writer),
				articlePageTotal:fromJS(action.articlePageTotal),
				writerPageTotal:fromJS(action.writerPageTotal)
			});
		case constants.GET_MORE_ARTICLE:
			return state.merge({
				'articleList':state.get('articleList').concat(action.articleList),
				'articlePage':action.nextpage
			});


		case constants.GET_UPDATE_PAGE:
			return state.set('writerPage',fromJS(action.upPage));

		case constants.GET_SCROLL_STATE:
			return state.set('scrollState',action.flag);
		default:
			return state;
	}	
}