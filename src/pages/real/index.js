import React from 'react';
import { Menu } from 'antd';
import SearchTree from '../../components/searchtree';
import realList from './mock/realList';
import './index.less';

const { SubMenu } = Menu;

export default class Real extends React.Component {
  render() {
    return (
      <SearchTree />
    );
  }
}
