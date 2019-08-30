import React,{ Component} from 'react';
import {HomeWrapper,HomeLeft,SwiperDiv,HomeRight,RecomBox,RecomItem} from './style.js';
import smImgUrl from '../../statics/saoma.png';
import {connect} from 'react-redux';
import {actionCreates} from './store';

import HomeArticleList from './components/HomeArticleList';
import WriterWrapper from './components/Writer';

class HomeIndex extends Component {
	scrollTop(){
		window.scrollTo(0,0);
	}
	render(){
		return(
			<HomeWrapper>				
				<HomeLeft>
					<SwiperDiv>	
						
					</SwiperDiv>

					<HomeArticleList />
						
				</HomeLeft>
				<HomeRight>
					<RecomBox>
						<RecomItem imgUrl={require("../../statics/images01.png")} />
						<RecomItem imgUrl={require("../../statics/images02.png")} />
						<RecomItem imgUrl={require("../../statics/images03.png")} />
						<RecomItem imgUrl={require("../../statics/images04.png")} />
					</RecomBox>

					<div className="saoma">
						<div className="smImg">
							<img src={smImgUrl} width="60" height="60" alt="扫描二维码" />
						</div>
						<div className="smtxt">
							<dd style={{color:'#333'}}>下载简书手机APP &nbsp;> </dd>
							<dd style={{color:'#999',fontSize:'13px'}}>随时随地发现和创作内容</dd>
						</div>
					</div>

					<WriterWrapper/>
					
				</HomeRight>
				{
					this.props.scrollState ? <div className="backTop"  onClick = {this.scrollTop}><span className="iconfont">&#xe60b;</span></div> : null
				}
								
			</HomeWrapper>
		)
	}

	componentDidMount(){
		// axios.get('/api/homeList.json').then((res)=>{
		// 	console.log(res.data.data);
		// }).catch((err)=>{})
		this.props.updateHomeData();
		this.bindEvents();
	}

	//向组件添加一个监听事件 监听属性：scroll 监听方法changeScroll
	bindEvents(){
		window.addEventListener('scroll',this.props.changeScroll);
	}
	//当组件消失，监听事件移除（只有首页有返回顶部）
	componentWillUnmount(){
		window.removeEventListener('scroll',this.props.changeScroll);
	}
	

}

const mapStateToProps =(state)=>({
	scrollState:state.getIn(['home','scrollState'])
})

const mapDispatchToProps = (dispatch)=>{
	return{
		updateHomeData(){
			dispatch(actionCreates.getHomeList())
		},
		changeScroll(){
			if (document.documentElement.scrollTop > 300) {
				dispatch(actionCreates.getScrollState(true))
			}else{
				dispatch(actionCreates.getScrollState(false))
			}
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeIndex);