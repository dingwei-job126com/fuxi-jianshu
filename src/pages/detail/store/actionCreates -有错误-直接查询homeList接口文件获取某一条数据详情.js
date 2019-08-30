import * as constants from './constants';
import axios from 'axios';

const DetailConId = (result,arList)=>({
	type:constants.UPDATE_DETAIL_LIST,
	arList:result.articleList[arList]
})
export const getDetailCon = (arList)=>{
	return (dispatch)=>{
		
		axios.get('/api/homeList.json').then((res)=>{
			const result = res.data.data;
			//console.log(result.articleList[arId].title);
			console.log(arList);
			dispatch(DetailConId(result,arList));
      		
		}).catch((err)=>{
			alert(err);
		})
	}
};
