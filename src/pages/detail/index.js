import React,{Component } from 'react';
import { DetailedWrapper,ArticleCon } from './style';
import {actionCreates} from './store';
import { connect } from 'react-redux';

class Detailed extends Component {
	render(){
		//console.log(this.props.conTitle)  调试 查看是否接收到了值
		console.log(this.props);//match.params.id是this.props属性中带的
		return(
			<DetailedWrapper>
				<h2>{this.props.detailTitle}</h2>
				<ArticleCon dangerouslySetInnerHTML={{__html:this.props.detailContent}}>
				</ArticleCon>
			</DetailedWrapper>
		)
	}	
	componentDidMount(){
		const listId = this.props.match.params.id;
		console.log(listId);
		this.props.getDetail(listId);
	}
}

const mapStateToProps = (state) =>({
	detailTitle:state.getIn(['detail','detailTitle']),
	detailContent:state.getIn(['detail','detailContent'])
})
/*
	1、发送请求获取homeList接口的数据
	2、根据首页传递来的id 再取出接口中对应的数据
*/
const mapDispatchToProps = (dispatch) =>{
	return{
	getDetail(listId){
		//console.log(arId);
		dispatch(actionCreates.getDetailCon(listId));
	}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Detailed);