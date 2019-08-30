import React,{Component} from 'react';
import {WriterWrapper} from './style';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Writer extends Component {
	render(){
		if (this.props.login) {
			return(
				<WriterWrapper>
					写文章页面
					<p>1、点击写文章：如果是登录状态，就跳转页面。未登录，就跳转到登录页面</p>
				</WriterWrapper>
			)
		}else{
			return (
				<Redirect to='/login'></Redirect>
			)
		}
	}
}

const mapStateToProps =(state) =>({
	login:state.getIn(['login','login'])
})

export default connect(mapStateToProps,null)(Writer);