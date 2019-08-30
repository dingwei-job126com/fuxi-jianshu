import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable' ;

//获取失去焦点事件
export const getFocusedTrue = ()=>({
	type:constants.UPDATE_FOCUSED_TRUE
});

export const getFocusedFalse = ()=>({
	type:constants.UPDATE_FOCUSED_FALSE
});

//鼠标移动和离开事件
export const getMouseEnter = ()=>({
		type:constants.CHANGE_MOUSE_ENTER
});
export const getMouseLeave=()=>({
	type:constants.CHANGE_MOUSE_LEAVE
})

//热门搜索 换一批 
export const getChangePage = (page)=>({
	type:constants.UPDATE_CHANGE_PAGE,
	page
})

//获取热门索索列表请求
const getChangeSearchList = (searchList)=>({
	type:constants.CHANGE_SEARCH_LIST,
	searchList:fromJS(searchList),//获取了所有数据
	totalPage:Math.ceil(searchList.length / 10) //数据的个数/每页显示的个数 得出总页数
});
export const getSearchList = ()=> {
	return (dispatch)=>{
		axios.get('/api/trending_search.json').then((res)=>{			
			const data = res.data;
			const action = getChangeSearchList(data.data);
			dispatch(action);

		}).catch((err)=>{
			alert(err)	
		})
	} 
} 
/*console.log(res.data); 
				res.data 中的data是json自带的属性，数据内容都存放在这个data属性中，
						.data 就是获取定义的json的内容。

			# 当成功获取到数据后，就要展示在页面上。
				（数据从接口文件中得来，是普通的js对象）
				替换最初定义的默认数据，显示该数据。
				即：派发action给reducer，改变store数据。
					派发时将js对象(数组)转换为immutable对象（数组）
				const action = {
				 	type:CHANGE_SEARCH_LIST,
				 	data.data
				 }
				dispatch(action)
			*/