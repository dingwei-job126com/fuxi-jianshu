import React ,{Component,Fragment} from 'react';
import {Writer,WriterBox,WriterItem} from '../style';
import { connect } from 'react-redux';
import {actionCreates} from '../store';

class WriterWrapper extends Component {

	getWriterList(){
		const {writer,writerPage,writerPageTotal} =this.props;
		const newWriterList = writer.toJS();
		const pageList = [];
		if (newWriterList.length) {
			for (let i=(writerPage-1)*5; i<writerPage*5; i++) {
				if (i<newWriterList.length) {
					pageList.push(
						<WriterItem key={newWriterList[i].id}>
								<img alt="" className="itemL" src={newWriterList[i].outhorImg} />
								<div className="itemC">
									<dd style={{fontSize:"14px"}}>{newWriterList[i].outhor}</dd>
									<dd style={{fontSize:"12px",color:"#969696"}}>{newWriterList[i].numbars}</dd>
								</div>
								<div className="itemR"><i className="iconfont">&#xe635;</i>关注</div>
							</WriterItem>
					)
				}
			}
		}
		return(
			<Fragment>
				{pageList}
			</Fragment>
		)
	}

	render(){
		const {writerPage,writerPageTotal,updatePage} = this.props;
		return(
			<Writer>
				<div className="writerTitle">
					<span>推荐作者</span>
					<span className="spanR" 
								onClick={()=>updatePage(writerPage,writerPageTotal,this.spanIcon)}								
					>
						<i className="iconfont spanIcon" ref={(icon)=>this.spanIcon = icon}>&#xe88c;</i>换一批
					</span>
				</div>
				<WriterBox>
				{
					this.getWriterList()
					// this.props.writer.map((item)=>{
					// 	return(
					// 		<WriterItem key={item.get('id')}>
					// 			<img alt="" className="itemL" src={item.get('outhorImg')} />
					// 			<div className="itemC">
					// 				<dd style={{fontSize:"14px"}}>{item.get('outhor')}</dd>
					// 				<dd style={{fontSize:"12px",color:"#969696"}}>{item.get('numbars')}</dd>
					// 			</div>
					// 			<div className="itemR"><i className="iconfont">&#xe635;</i>关注</div>
					// 		</WriterItem>
					// 	)
					// })
				}
				</WriterBox>
				<div className="more">查看全部 > </div>
			</Writer>
		)
	}
}

const mapStateToProps = (state)=>({
	writer:state.getIn(['home','writer']),
	writerPage:state.getIn(['home','writerPage']),
	writerPageTotal:state.getIn(['home','writerPageTotal'])
});

const mapDispatchToProps = (dispatch)=>{
	return {
		updatePage(writerPage,writerPageTotal,spanIcon){
			//console.log(spanIcon);
			/*
			spanIcon.style.transform="rotate(360deg)";
			spanIcon.style.transform.replace(/[^0-9]/ig,'') 
													将 "rotate(360deg)" 除数字以外的内容 替换成空，
													即：就剩下了360这个数字了
													spanIcon.style.transform = 0，此时0 是个字符串类型
													parseInt(originAngle,10); 解析成10进制的整数
			*/
			let originAngle = spanIcon.style.transform.replace(/[^0-9]/ig,'');
			if (originAngle) {
				originAngle = parseInt(originAngle,10);
			}else{
				originAngle = 0;
			}
			spanIcon.style.transform="rotate("+ (originAngle+360) +"deg)";
			//console.log(originAngle);

			if (writerPage<writerPageTotal) {
				dispatch(actionCreates.getUpdatePage(writerPage+1));
			}else{
				dispatch(actionCreates.getUpdatePage(1))
			}
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(WriterWrapper);