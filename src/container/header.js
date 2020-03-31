import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';
import * as screenfull from 'screenfull';
import './header.less'

const { SubMenu } = Menu;
const { Header } = Layout;

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    this.setState({
      username: 'Muyy'
    });
  }

  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request();
    }
  }

  render() {
    return (
      <Header style={{ background: '#fff' }}>
      </Header>
    );
  }
}
