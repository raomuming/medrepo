import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Loadable from 'react-loadable';
import './content.less';

const { Content } = Layout;

const Loading = () => <div>Loading...</div>

const Contents = () => (
  <Content className="content" id="content">
  </Content>
)

export default Contents;
