import React from "react";
import { Divider } from 'antd';
import './HOC.css';

// 高阶组件
const HOC = (Component) => {
	class withMouseComponent extends React.Component {
		constructor(props) {
			super(props);
			this.state = { x: 0, y: 0 };
		}

		handleMouseMove = (event) => {
			this.setState({
				x: event.clientX,
				y: event.clientY,
			});
		};

		render() {
			return (
				<div style={{ height: "500px" }} onMouseMove={this.handleMouseMove}>
					{/* 1.增加 mouse 属性 */}
					<Component mouse={this.state} />
				</div>
			);
		}
	}
	return withMouseComponent;
};

const App = (props) => {
	const a = props.a;
	const { x, y } = props.mouse; // 接收 mouse 属性
	return (
		<div style={{ height: "500px" }} class="content">
			<Divider>
				鼠标位置 ({x}, {y})
			</Divider>
			
		</div>
	);
};

export default HOC(App);
