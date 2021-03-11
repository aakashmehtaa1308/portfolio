import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

import { AlignCenterOutlined } from '@ant-design/icons';

import './style.css';
import DrawerCom from '../DrawerCom';
const { Header } = Layout;
// const { SubMenu } = Menu;
/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawer = () => {
    setShowDrawer((showDrawer) => !showDrawer);
  };

  const closeDrawer = () => {
    setShowDrawer((showDrawer) => !showDrawer);
  };

  return (
    <div className='container_fluid'>
      <Header className='header' style={{ backgroundColor: 'transparent' }}>
        <div className='logo'>PORTFOLIO</div>
        <Menu
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          style={{
            float: 'right',
            backgroundColor: 'transparent',
            border: 'none',
          }}
        >
          <Menu.Item key='1'>HOME</Menu.Item>
          <Menu.Item key='2'>ABOUT</Menu.Item>
          <Menu.Item key='3'>EXPERIENCE</Menu.Item>
          <Menu.Item key='4'>SKILLS</Menu.Item>
          <Menu.Item key='5'>PROJECTS</Menu.Item>
          <AlignCenterOutlined className='icon' onClick={handleDrawer} />
        </Menu>
      </Header>
      <DrawerCom toShow={showDrawer} toClose={closeDrawer} />
    </div>
  );
};

export default Navbar;
