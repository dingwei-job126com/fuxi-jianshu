import React,{ Component } from 'react';
import {FooterWrapper} from './style.js'

class Footer extends Component {
	render() {
		return (
			<FooterWrapper>
				<ul>
					<li>关于简书 </li>
					<li>· 联系我们 </li>
					<li>· 加入我们 </li>
					<li>· 简书出版 </li>
					<li>· 品牌与徽标 </li>
					<li>· 帮助中心 </li>
					<li>· 合作伙伴</li>					
				</ul>
				<p>©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 / 沪公网安备31010402002252号 /</p>
				<p>简书网举报电话：021-34770013 /  Fanzha  亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产</p>
				<p>被骗受损而设，请您一旦收到来电，立即接听 /  Zggsrz</p>

			</FooterWrapper>
		)
	}
}

export default Footer;