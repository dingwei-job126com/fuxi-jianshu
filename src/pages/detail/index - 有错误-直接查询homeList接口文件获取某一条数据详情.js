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
				<h2>{this.props.conTitle}</h2>
				<ArticleCon dangerouslySetInnerHTML={{__html:this.props.content}}>
				</ArticleCon>
			</DetailedWrapper>
		)
	}	
	componentDidMount(){
		const arList = this.props.match.params.id;
		console.log(arList);
		this.props.getDetail(arList);
	}
}

const mapStateToProps = (state) =>({
	conTitle:state.getIn(['detail','conTitle']),
	content:state.getIn(['detail','content'])
})
/*
	1、发送请求获取homeList接口的数据
	2、根据首页传递来的id 再取出接口中对应的数据
*/
const mapDispatchToProps = (dispatch) =>{
	return{
	getDetail(arList){
		//console.log(arId);
		dispatch(actionCreates.getDetailCon(arList));
	}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Detailed);