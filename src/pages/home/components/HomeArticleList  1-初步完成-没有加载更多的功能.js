import React,{ Component }from 'react';
import {HomeList,ListItem,ItemCon} from '../style';
import { connect } from 'react-redux';


class HomeArticleList extends Component {	
	render(){
		return (
			<HomeList>
			{
				this.props.articleList.map((item)=>{
				//如果没有图片，就不显示图片，内容的长度为100%宽					
					if (item.get('conImg')=="") {
						return(
							<ListItem key={item.get('id')} className="kong">
								<ItemCon className="itemConC">
									<div className="itemConTitle">{item.get('title')}</div>
									<div className="itemConText">{item.get('desc').substr(0,10)}</div>
								</ItemCon>
							</ListItem>
						)
					}else{
						return(
							<ListItem key={item.get('id')}>
								<ItemCon>
									<div className="itemConTitle">{item.get('title')}</div>
									<div className="itemConText">{item.get('desc')}</div>
								</ItemCon>
								<img className="ItemImg" alt="" src={item.get('conImg')}/>
							</ListItem>
						)
					}
				})						
			}
			<div className="more" >查看全部 > </div>
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
}

export default connect(mapStateToProps,null)(HomeArticleList);