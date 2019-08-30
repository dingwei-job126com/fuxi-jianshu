import styled from 'styled-components';
import logoImge from '../../statics/logo.png';

export const HeaderDiv = styled.div`
	width:100%;
	height:56px;		
	border-bottom:1px solid #f0f0f0;
	box-sizing:border-box;
	position:fixed;
	top:0;
	z-index:99;
	background:#fff;

`;
export const Nav = styled.div`
	min-width:768px;
	max-width:1440px;
	margin:0 auto;
	height:55px;
	position:relative;
`;
export const Logo = styled.div`
	float:left;
	position:absolute;
	left:0;
	height:55px;
	width:100px;
	background:url(${logoImge}) #FFF;
	background-size:contain;
	z-index:1;
`;
export const NavBar = styled.div`
	width:945px;
	height:55px;
	margin:0 auto;
`;

export const NavBarLeft = styled.div`
	width:490px;				
	height:55px;
	float:left;
`;
export const BarIteml = styled.div`
	float:left;
	line-height:55px;
	margin-right:20px;
	cursor:pointer;
	.iconfont{
		font-size:18px;
		margin-right:5px;
	}
	.linkNone{
		text-decoration:none;
		color:#ea6f5a;
	}
`;

export const NavSerch = styled.div`
	position:relative;
	height:40px;
	float:left;
	margin-top:8px;
	
	.iconfont{
		position:absolute;
		right:5px;
		top:5px;
		line-height:30px;
		font-size:18px;
		width:30px;
		height:30px;
	}
	.serchIcon{
		color:#FFF;
		background:#999;
		text-align:center;
		border-radius:15px;
	}	
`;
export const SerchInfo = styled.div`
	width:250px;	
	box-shadow:0 0 8px rgba(0, 0, 0, .2);
	border:1px solid #f0f0f0;
	border-radius: 4px;
	position:absolute;
	top:43px;
	left:0;
	padding:15px;
	z-index:9;
	background:#FFF;
`;
export const InfoTitle = styled.div`
	font-size:14px;
	color: #969696;
	margin-bottom:15px;	
	span{
		float:right;
		cursor:pointer;
		position:relative;				
		.spicon{
			top:0px;
			left:-20px;
			position:absolute;
			width:14px;
			height:14px;
			line-height:14px;
			text-align:center;
			transition:0.2s all ease;
			transform:rotate(0deg);
			transform-origin:50% 50%;
		}
	}
`;
export const InfoItem = styled.div`
	padding:5px;
	margin:0 5px 10px 0;
	border:1px solid #ddd;
	border-radius:3px;
	font-size:12px;
	color:#787878;
	display:inline-block;
	cursor:pointer;
`;

export const SerchInput = styled.input.attrs({
	placeholder:'结果不会欺骗自己'
})`
	width:200px;
	height:40px;
	border:none;
	border-radius:20px;
	padding:0 28px 0 10px;
	box-sizing:border-box;
	outline:none;
	background:#F5F5F5;
	color:#696969;
	&::placeholder{
		color:#999
	}
	&.focused{
		width:300px;
	}
	&.slide-enter{
		//动画初始时 增加动画
		transition:all 0.5s ease-out;
	}
	&.slide-enter-active{
		//动画最终状态
		width:300px;
	}
	&.slide-exit{
		transition:all 0.5s ease-out;
	}
	&.slide-exit-active{
		width:200px;
	}
`;

export const NavBarRight= styled.div`
	float:right;
	width:350px
	height:55px;		
`;
export const BarItemr = styled.div`
	float:right;
		line-height:55px;
		margin-right:10px;
		cursor:pointer;
		.iconfont{
			font-size:18px;
			margin-right:5px;
		}
		.linkNone{
			color:#000;
			text-decoration:none;
		}
`;

export const SignWrite = styled.div`
	position:absolute;
	right:0;
	top:0;
	width:200px;
	height:55px;
	z-index:1;
`;
export const SignUp = styled.div`
	float:left;
	width:80px;
	height:38px;
	border-radius:20px;
	color:#ea6f5a;
	margin-top:8px;
	text-align:center;
	line-height:38px;
	cursor:pointer;
	border:1px solid rgb(255, 255, 255);
	&:hover{
		background:rgba(236,97,73,.3)
	}
`;
export const Writes = styled.div`
	float:right;
	width:100px;
	height:40px;
	line-height:40px;
	margin-top:8px;
	text-align:center;
	border-radius:20px;
	background:#ea6f5a;
	cursor:pointer;
	color:#FFF;
	.iconfont{
				font-size:18px;
				margin-right:5px;				
			}
`;