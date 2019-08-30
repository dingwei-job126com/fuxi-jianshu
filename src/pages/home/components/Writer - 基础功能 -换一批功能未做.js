import React ,{Component,Fragment} from 'react';
import {Writer,WriterBox,WriterItem} from '../style';
import { connect } from 'react-redux';

class WriterWrapper extends Component {


	render(){
		return (
			<Writer>
				<div>
					<span>推荐作者</span>
					<span className="spanR"><i className="iconfont">&#xe88c;</i>换一批</span>
				</div>
				<WriterBox className='itembox'>
				{
					this.props.writer.map((item)=>{
						return(
							<WriterItem key={item.get('id')}>
								<img alt="" className="itemL" src={item.get('outhorImg')} />
								<div className="itemC">
									<dd style={{fontSize:"14px"}}>{item.get('outhor')}</dd>
									<dd style={{fontSize:"12px",color:"#969696"}}>{item.get('numbars')}</dd>
								</div>
								<div className="itemR"><i className="iconfont">&#xe635;</i>关注</div>
							</WriterItem>
						)
					})
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
})
export default connect(mapStateToProps,null)(WriterWrapper);