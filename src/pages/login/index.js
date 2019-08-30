import React,{ Component } from 'react';
import {LoginWrapper,LoginDiv,Button,Input} from './style';
import {connect} from 'react-redux';
import {actionCreates} from './store';
import {Redirect} from 'react-router-dom';

class Login extends Component {
	render(){
		if (!(this.props.login)) {
			return(
				<LoginWrapper>
					<LoginDiv>
						<Input placeholder="账号" ref={(username)=>this.username = username} />
						<Input placeholder = "密码" type="password" ref={(userPass)=>this.userPass = userPass}/>
						<Button onClick={()=>this.props.btnLogin(this.username,this.userPass)}>登 录</Button>
					</LoginDiv>
				</LoginWrapper>
			)
		}else{
			return( <Redirect to='/' ></Redirect> )
		}
	}
}

const mapStateToProps = (state) =>({
	login:state.getIn(['login','login'])
});
const mapDispatchToProps =(dispatch)=>{
	return{
		btnLogin(username,userPass){
			//dom的ref传递过来的就是自身dom节点
			//console.log(username.value,userPass.value)\
			dispatch(actionCreates.getLoginState())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);