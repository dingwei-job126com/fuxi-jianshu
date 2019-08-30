import * as constants from './constants';
import axios from 'axios';

const DetailConId = (detailTitle,detailContent)=>({
	type:constants.UPDATE_DETAIL_LIST,
	detailTitle,
	detailContent
})
export const getDetailCon = (listId)=>{
	return (dispatch)=>{
		
		axios.get('/api/detailList.json?id=' +listId).then((res)=>{
			const result = res.data.data;
			//console.log(result.articleList[arId].title);
			console.log(result);
			dispatch(DetailConId(result.detailTitle,result.detailContent));
      		
		})
	}
};
