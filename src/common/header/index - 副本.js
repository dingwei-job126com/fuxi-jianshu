import React,{ Component} from 'react';
import {connect} from 'react-redux';
import { HeaderDiv,Nav,
		Logo,NavBar,NavBarLeft,BarIteml,NavSerch,SerchInfo,InfoItem,InfoTitle,SerchInput,
		NavBarRight,BarItemr,SignWrite,SignUp,Writes } from './style.js';
import { CSSTransition } from 'react-transition-group';//动画模块
import { actionCreates } from './store';

/*
	定义一个方法 用来单独管理 热门搜索 当文本框获取焦点时 显示，否则 就返回一个空的即不显示
*/


class Header extends Component {

	serchInfoItem(){
		/*
			# 如果文本框获得焦点，就显示热门搜索块 或者 鼠标经过热门搜索区域 也显示
		*/
		const {focused, searchList,mouseEnter,mouseLeave,mouseIn,page,totalPage,changePage} = this.props;
		
		if (focused || mouseIn) {
			return (
				<SerchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
					<InfoTitle>
						热门搜索
						<span onClick={()=>changePage(page,totalPage)}><i className="iconfont">&#xe88c;</i>换一批</span>
					</InfoTitle>
					{
						//这里searchList 是所有的数据
						searchList.map((item)=>{
							return(
								<InfoItem key={item.get('con')}>{item.get('con')}</InfoItem>
							)
						})
					}
					
				</SerchInfo>
			)
		}else{
			return null;
		}
	};

	render(){
		const {focused,InputFocuse,InputBlur} = this.props;
		return (
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
								<CSSTransition in={focused} timeout={500} 
										classNames="slide"
								>
									<SerchInput className={focused ? 'focused' : ''}
														onFocus={InputFocuse}
														onBlur={InputBlur}></SerchInput>
								</CSSTransition>
								<i className={focused?'focused iconfont serchIcon':' iconfont'} >&#xe617;</i>
								
								{/*热门搜索这一块，定义成一个函数单独管理，因为他有判断*/}
								{ this.serchInfoItem() }

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
}


const mapStateToProps = (state)=>{
	return {
		focused:state.get('header').get('focused'),
		searchList:state.getIn(['header','searchList']),
		mouseIn:state.getIn(['header','mouseIn']),
		totalPage:state.getIn(['header','totalPage']),
		page:state.getIn(['header','page'])
	}
}

const mapDispatchToProps =(dispatch)=>{
	return {
			InputFocuse(){
				dispatch(actionCreates.getFocusedTrue());
				dispatch(actionCreates.getSearchList());//获取搜索的热门搜索列表
			},
			InputBlur(){
				const action = actionCreates.getFocusedFalse();
				dispatch(action);
				// const action = {
				// 	type:'update_focused_false'
				// };
				// dispatch(action);
			},
			mouseEnter(){
				dispatch(actionCreates.getMouseEnter());
			},
			mouseLeave(){
				dispatch(actionCreates.getMouseLeave());
			},
			//换一批
			changePage(page,totalPage){
				/*
					如果当前页>总页码 ：当前页+1 即显示下一页
					如果 当前页=总页码： 则回到第一页
					也就是：要接收 当前页和 总页数
				*/
				if (page < totalPage) {
					dispatch(actionCreates.getChangePage(page+1));
				}else{
						dispatch(actionCreates.getChangePage(1));
				}
			
			}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);