import * as constants from './constants.js';//因为当前文件和该引入的文件在同一目录下，可以直接引入文件(不需要引index文件)
import axios from 'axios';
import {fromJS} from 'immutable';

const actionHomeList = (result)=>({
	type:constants.CHANGE_HOME_DATA,
	articleList:result.articleList,
	articlePageTotal:Math.ceil(result.articleList.length/5),
	writer:result.writerList,
	writerPageTotal:Math.ceil(result.writerList.length/5)
})
export const getHomeList = ()=>{
	return (dispatch)=>{
		axios.get('/api/homeList.json').then((res)=>{
			//console.log(res.data.data);
			const result = res.data.data;
			dispatch(actionHomeList(result))
		}).catch((err)=>{})
	}	
}


//作者列表的换一批功能
export const getUpdatePage = (upPage)=>{
	return{
		type:constants.GET_UPDATE_PAGE,
		upPage
	}
}

//滚动条
export const getScrollState = (flag)=>({
	type:constants.GET_SCROLL_STATE,
	flag
})

/*
	加载更多按钮
	点击加载按钮 请求 第 1页数据 （默认数据+1）
	再点击加载   请求 第 2 页 数据
*/



const actionMoreArticle =(resultList,nextpage)=>({
	type:constants.GET_MORE_ARTICLE,
	articleList:fromJS(resultList),
	nextpage
})
export const getMoreArticle = (articlePage)=>{
	return (dispatch)=>{
		axios.get('/api/moreArticle.json?page=' + articlePage).then((res)=>{
			const resultList = res.data.data;
			console.log(articlePage);
			dispatch(actionMoreArticle(resultList,articlePage+1))
		})
	}
}