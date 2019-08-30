import styled from 'styled-components';
import swiperUrl from '../../statics/swiper.jpg';

export const HomeWrapper = styled.div`
	height:auto!importent;
	height:100%;
	display:table;
	margin:0 auto 20px auto;
	width:960px;
	position:relative;
	top:60px;
	z-index:2;
	.more{
		width:100%;
		height:40px;
		line-height:40px;
		color:#787878;
		border: 1px solid #dcdcdc;
    	background: #f7f7f7;
    	font-size: 14px;
    	border-radius: 4px;
    	text-align:center;
    	cursor:pointer;
    	margin-top:15px
	}
	//回到顶部
	.backTop{
		width:50px;
		height:50px;
		position:fixed;
		bottom:50px;
		right:40px;
		z-index:99px;
		border:1px solid #dcdcdc;
		text-align:center;
		line-height:50px;
		cursor:pointer;
		.iconfont{			
			font-size:20px;
		}
`;
export const HomeLeft = styled.div`
	width:60%;
	height:auto!importent;
	height:100%;
	float:left;
	margin-bottom:20px;
`;
export const HomeRight = styled.div`
	width:35%;
	height:auto!importent;
	height:100%;
	display:table;
	float:right;
	.saoma{
		border:1px solid #f0f0f0;
		height:80px;
		text-align:center;
		margin-top:20px;
		cursor:pointer;
		.smImg{
			width:60px;
			height:60px;
			display:inline-block;
			margin:10px auto 0 auto;
		}
		.smtxt{
			display:inline-block;
			font-size:15px;
			line-height:150%;
			vertical-align:top; 
			margin:15px 0 0 10px;
		}
	}
`;
export const SwiperDiv = styled.div`
	width:100%;
	height:270px;
	margin-bottom:20px;
	background:url(${swiperUrl}) no-repeat;
	background-size:contain;

`;

export const HomeList = styled.div`
	width:100%;
`;
export const ListItem = styled.div`
	border-top:1px solid #f0f0f0;
	margin-bottom:20px;
	min-height:140px;
	width:100%;
	position:relative;
	.ItemImg{
		float:right;
		right:0;
		width:150px;
		height:100px;
		position:absolute;
		top:50%;
		margin-top:-50px;
		display:block;	
	}
`;
export const ItemCon = styled.div`
	float:left;
	width:73%;
	margin-top:20px;	
	&.itemConC{
		width:100%;
	}
	.itemConTitle{			
		font-weight: 700;
		font-size:18px;
		cursor:pointer;
	}
	.itemConText{
		margin-top:10px;
		color:#969696;
		line-height: 24px;
    	color: #999;
	}
	.LinkNone{
		text-decoration:none;
		color:#333;
	}
	.LinkNone:hover{
		text-decoration:underline;
		color:#333;
	}

`;


//右侧内容
export const RecomBox = styled.div`
	width:100%;

`;
export const RecomItem = styled.div`
	width:100%;
	height:50px;
	background:url(${(props)=>props.imgUrl}) no-repeat;
	background-size:contain;
	margin:10px 0;
`;

export const Writer = styled.div`
	width:100%;
	margin-top:20px;

	.spanR{
		float:right;
		cursor:pointer;
		position:relative;
		.spanIcon{
			width:20px;
			height:20px;
			font-size:20px;
			position:absolute;
			left:-22px;
			transition:all 0.2s ease;
			transform-origin:50% 50%;
		}
	}
	

`;	
export const WriterBox = styled.div`
	display:table;
	width:100%;
	margin-top:20px;
`;
export const WriterItem=styled.div`
	clear:both;	
	margin-bottom:15px;
	padding-bottom:15px;
	display:table;
	width:100%;
	border-bottom:1px dashed #f0f0f0;
	.itemL{
		float:left;
		width:48px;
		height:48px;
		border-radius:50%;
		background:#7FFFAA
	}
	.itemC{
		float:left;
		margin:5px 0 0 15px;
		dd{
			line-height:150%;
		}
	}
	.itemR{
		float:right;
		font-size:14px;
		color:#42c02e;
		margin-right:10px;
	}

`;

export const InFoDivList = styled.div`
`;