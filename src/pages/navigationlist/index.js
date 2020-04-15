import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export default class NavigationList extends Component {
  render() {
    return (
      <div>
        <Link to="/subjects">学科真题</Link>
        <Link to="/">必背考点</Link>
        <Link to="/">随机组题</Link>
        <Link to="/">模考测试</Link>
      </div>
    );
  }
}
