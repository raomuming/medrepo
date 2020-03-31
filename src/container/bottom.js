import React from 'react';
import { Layout } from 'antd';
import './bottom.less';

const { Footer } = Layout;

export default class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    };
  }

  componentDidMout() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    const { timer } = this.state;
    this.setState({ timer: timer + 1});
  }

  render() {
    const { timer } = this.state;
    return (
      <div>
        <Footer className="bottom animated bounceInLeft">
          <div className="text">
            <span>2020-2025 Eric</span>
            <span className="stay">
              您学习了
              <span className="time">{timer}</span>秒
            </span>
          </div>
        </Footer>
      </div>
    );
  }
}
