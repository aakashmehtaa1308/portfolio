import React, { useState } from 'react';
import { Drawer, Menu } from 'antd';

import './style.css';
/**
 * @author
 * @function Drawer
 **/

const DrawerCom = (props) => {
  return (
    <div>
      <Drawer
        className='drawer'
        placement='right'
        onClose={props.toClose}
        visible={props.toShow}
      >
        <Menu
          theme='light'
          mode='vertical'
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
        </Menu>
      </Drawer>
    </div>
  );
};

export default DrawerCom;
