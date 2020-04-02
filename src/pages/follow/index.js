import React from 'react';
import { rdColor } from 'diana';
import './index.less';

export default class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      col: '#666'
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.getRandomColor, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getRandomColor = () => {
    this.setState({
      col: rdColor()
    });
  }

  render() {
    const { col } = this.state;
    return (
      <div className="animated flip ani-box">
        <div>
          <a
            href="https://github.com/raomuming"
            className="welcome animated flip text"
            style={{ color: col }}
          >
            项目地址
          </a>
        </div>
        <img src="" width="100" alt="logo" className="lastPic" />
        <div className="animated swing discribe">本项目会把平时工作、学习中</div>
        <div className="animated swing discribe">
          遇到的事例抽象成demo给展示出来。欢迎{ ' '}
          <a href="https://github.com/raomuming">Star</a>
        </div>
      </div>
    );
  }
}
