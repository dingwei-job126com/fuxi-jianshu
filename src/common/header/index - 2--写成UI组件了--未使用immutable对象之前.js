import React from 'react';
import {connect} from 'react-redux';
import { HeaderDiv,Nav,
		Logo,NavBar,NavBarLeft,BarIteml,NavSerch,SerchInput,
		NavBarRight,BarItemr,SignWrite,SignUp,Writes } from './style.js';
import { CSSTransition } from 'react-transition-group';//动画模块
import { actionCreates } from './store';

const Header = (props)=>{
	return(
			<HeaderDiv>
				<Nav>
					<Logo />
					<NavBar>
						<NavBarLeft>
							<BarIteml>
								<i className="iconfont">&#xe94f;</i><i>首页</i>
							</BarIteml>
							<BarIteml>
								<i className="iconfont">&#xe61a;</i><i>下载APP</i>
							</BarIteml>
						{/*
							当SerchInput被选中时 就增加一个样式 focused
							否则就没有样式
						*/}							
							<NavSerch>
								<CSSTransition in={props.focused} timeout={500} 
										classNames="slide"
								>
									<SerchInput className={props.focused ? 'focused' : ''}
														onFocus={props.InputFocuse}
														onBlur={props.InputBlur}></SerchInput>
								</CSSTransition>
								<i className={props.focused?'focused iconfont serchIcon':' iconfont'} >&#xe617;</i>
							</NavSerch>	
							
						</NavBarLeft>
						<NavBarRight>							
							<BarItemr>
								<i className="iconfont"></i><i>登录</i>
							</BarItemr>
							<BarItemr>
								<i className="iconfont">&#xe728;</i><i>beta</i>
							</BarItemr>
							<BarItemr>
								<i className="iconfont">&#xe61a;</i><i>Aa</i>
							</BarItemr>							
						</NavBarRight>
					</NavBar>
					<SignWrite>
						<SignUp>注册</SignUp>
						<Writes><i className="iconfont">&#xe6a4;</i><i>写文章</i></Writes>
					</SignWrite>
				</Nav>
			</HeaderDiv>
		)
}

const mapStateToProps = (state)=>{
	return {
		focused:state.header.focused
	}
}

const mapDispatchToProps =(dispatch)=>{
	return {
			InputFocuse(){
				const action = actionCreates.getFocusedTrue();
				dispatch(action);
			},
			InputBlur(){
				const action = actionCreates.getFocusedFalse();
				dispatch(action);
				// const action = {
				// 	type:'update_focused_false'
				// };
				// dispatch(action);
			}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);