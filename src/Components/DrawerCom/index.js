import React, { useState } from 'react';
import { Drawer, Menu } from 'antd';

import { Link } from 'react-scroll';
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
          <Menu.Item key='1'>
            <Link to='about' smooth={true}>
              HOME
            </Link>
          </Menu.Item>
          {/* <Menu.Item key='2'>
            <Link to='about' smooth={true}>
              ABOUT
            </Link>
          </Menu.Item> */}
          <Menu.Item key='2'>
            <Link to='experience' smooth={true}>
              EXPERIENCE
            </Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to='skills' smooth={true}>
              SKILLS
            </Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link to='projects' smooth={true}>
              PROJECTS
            </Link>
          </Menu.Item>
          <Menu.Item key='5'>
            <Link to='contact' smooth={true}>
              CONTACTS
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default DrawerCom;
