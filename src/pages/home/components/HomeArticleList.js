import React,{ Component,Fragment }from 'react';
import {HomeList,ListItem,ItemCon} from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actionCreates} from '../store';


class HomeArticleList extends Component {	
	/*
	forArticleList(){		
		const {articlePage,articleList} = this.props;
		const newArticleList = articleList.toJS();
		const newPageList = [];

		if (newArticleList.length) {
			for (let i = (articlePage-1)*5; i < articlePage*5; i++) {
				if (i < newArticleList.length) {
					if (newArticleList[i].conImg=="") {	
					console.log(newArticleList[i].id);					
					newPageList.push(						
							<ListItem key={newArticleList[i].id} className="kong">
								<ItemCon className="itemConC">
									<div className="itemConTitle">
										<Link to={'/detail/' + newArticleList[i].id} className="LinkNone">{newArticleList[i].title}</Link>
									</div>
									<div className="itemConText">{newArticleList[i].desc}</div>
								</ItemCon>								
							</ListItem>								
					)
					}else{
						newPageList.push(
							<ListItem key={newArticleList[i].id}>
								<ItemCon>
									<div className="itemConTitle">
										<Link to={'/detail/'+ newArticleList[i].id } className="LinkNone">{newArticleList[i].title}</Link>
									</div>
									<div className="itemConText">{newArticleList[i].desc}</div>
								</ItemCon>
								<img className="ItemImg" alt="" src={newArticleList[i].conImg}/>
							</ListItem>	
							)
						}				
				}				
			}
		}
		return(
					<Fragment>
						{newPageList}
					</Fragment>
				)
	};
	*/
	render(){
		const {articleList,moreArticle,articlePage} = this.props;
		return (
			<HomeList>
			{
				/*this.forArticleList()*/  //循环列表项
				articleList.map((item,index)=>{
				//如果没有图片，就不显示图片，内容的长度为100%宽					
					if (item.get('conImg')=="") {
						return(
							<ListItem key={index} className="kong">
								<ItemCon className="itemConC">
									<div className="itemConTitle">
										<Link to={'/detail/'+ item.get('id')} className="LinkNone">{item.get('title')}</Link>
									</div>
									<div className="itemConText">{item.get('desc').substr(0,10)}</div>
								</ItemCon>
							</ListItem>
						)
					}else{
						return(
							<ListItem key={index}>
								<ItemCon>
									<div className="itemConTitle">
										<Link to={'/detail/'+ item.get('id')} className="LinkNone">{item.get('title')}</Link>
									</div>
									<div className="itemConText">{item.get('desc')}</div>
								</ItemCon>
								<img className="ItemImg" alt="" src={item.get('conImg')}/>
							</ListItem>
						)
					}
				})						
			}
			<div className="more" onClick={()=>moreArticle(articlePage)}>查看全部 > </div>
			</HomeList>
		)
	}
}
const mapStateToProps = (state)=>{
	return {
		articleList:state.get('home').get('articleList'),
		articlePage:state.getIn(['home','articlePage']),
		articlePageTotal:state.getIn(['home','articlePageTotal'])
	}
};

const mapDispatchToProps = (dispatch) =>({
	moreArticle(articlePage){
		dispatch(actionCreates.getMoreArticle(articlePage))
	}
	
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeArticleList);