import React,{ Component} from 'react';
import {connect} from 'react-redux';
import { HeaderDiv,Nav,
		Logo,NavBar,NavBarLeft,BarIteml,NavSerch,SerchInfo,InfoItem,InfoTitle,SerchInput,
		NavBarRight,BarItemr,SignWrite,SignUp,Writes } from './style.js';
import { CSSTransition } from 'react-transition-group';//动画模块
import { actionCreates } from './store';
import {actionCreates as loginActionCreates} from '../../pages/login/store'
import {Link} from 'react-router-dom';

/*
	定义一个方法 用来单独管理 热门搜索 当文本框获取焦点时 显示，否则 就返回一个空的即不显示
*/


class Header extends Component {

	serchInfoItem(){
		/*
			# 如果文本框获得焦点，就显示热门搜索块 或者 鼠标经过热门搜索区域 也显示
		*/
		const {focused, searchList,mouseEnter,mouseLeave,mouseIn,page,totalPage,changePage} = this.props;
		
		//将searchList转换成普通js对象，js对象才有下标
		const jsSearchList = searchList.toJS();
		const pageList = [];

		//页面加载时：page值是1 searchList的默认值是空，没有数据，只有当searchList有值时才能循环
		if (jsSearchList.length) {
			for (var i = (page-1)*10;i < page*10; i++ ) {
				if (jsSearchList[i]) {
				//console.log(jsSearchList[i].con);
					pageList.push(<InfoItem key={jsSearchList[i].con}>{jsSearchList[i].con}</InfoItem>);
				}
			}
		}

		if (focused || mouseIn) {
			return (
				<SerchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
					<InfoTitle>
						热门搜索
						<span onClick={()=>changePage(page,totalPage,this.spicon)}>
							<i className="iconfont spicon" ref={(icon)=>this.spicon = icon}>&#xe88c;</i>
							换一批
						</span>
					</InfoTitle>
					{
						pageList  //这是分页的当前页数据
					}
					
				</SerchInfo>
			)
		}else{
			return null;
		}
	};

	render(){
		const {focused,InputFocuse,InputBlur,searchList} = this.props;
		return (
			<HeaderDiv>
				<Nav>
					<Link to="/">
					<Logo />
					</Link>
					<NavBar>
						<NavBarLeft>
							<BarIteml>
								<Link to="/" className="linkNone">
								<i className="iconfont">&#xe94f;</i><i>首页</i>
								</Link>
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
														onFocus={()=>InputFocuse(searchList)}
														onBlur={InputBlur}></SerchInput>
								</CSSTransition>
								<i className={focused?'focused iconfont serchIcon':' iconfont'} >&#xe617;</i>
								
								{/*热门搜索这一块，定义成一个函数单独管理，因为他有判断*/}
								{ this.serchInfoItem() }

							</NavSerch>	
							
						</NavBarLeft>
						<NavBarRight>							
							
							{
								this.props.login ?<BarItemr onClick={this.props.logOut}>
																		<i className="iconfont"></i>
																		<i>退出</i>
																	</BarItemr>
								:<BarItemr >
								<Link to={'/login'} className='linkNone'><i className="iconfont"></i><i>登录</i></Link>
								</BarItemr>
									
			
							}
							
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
						{
							this.props.login ?<Writes>
																<Link to={'/writer'} className='linkNone' >
																	<i className="iconfont">&#xe6a4;</i><i>写文章</i>
																</Link>
															</Writes>
												:<Writes>
													<Link to={'/login'} >
														<i className="iconfont">&#xe6a4;</i><i>写文章</i>
													</Link>
												</Writes>
						}
						
					</SignWrite>
				</Nav>
			</HeaderDiv>
		)
	}
}


const mapStateToProps = (state)=>{
	return {
		//focused:state.header.get("focused")
		focused:state.get('header').get('focused'),
		searchList:state.getIn(['header','searchList']),
		mouseIn:state.getIn(['header','mouseIn']),
		totalPage:state.getIn(['header','totalPage']),
		page:state.getIn(['header','page']),
		login:state.getIn(['login','login'])
	}
}

const mapDispatchToProps =(dispatch)=>{
	return {
			InputFocuse(searchList){
				dispatch(actionCreates.getFocusedTrue());
				/*
					当searchList没有数据时才发送请求（即第一次获取焦点才会发送请求）
					打印searchList 里面有个属性 size， 利用该属性的值进行判断
					console.log(searchList);
				*/
				if (searchList.size === 0) {
					dispatch(actionCreates.getSearchList());//获取搜索的热门搜索列表
				}
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
			changePage(page,totalPage,spicon){
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
				/*
				每次点击时 让角度增加360度
				*/
				let originAngle = spicon.style.transform.replace(/[^0-9]/ig,'');
				if (originAngle) {
					originAngle = parseInt(originAngle,10);
				}else{
					originAngle = 0
				}
				spicon.style.transform="rotate("+ (originAngle+360) +"deg)";
				console.log(originAngle);
			
			},
			//退出登录
			logOut(){
				dispatch(loginActionCreates.getLogOut());
			}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);