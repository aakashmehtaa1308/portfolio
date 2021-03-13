import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-scroll';

import { AlignCenterOutlined, PicLeftOutlined } from '@ant-design/icons';

import './style.css';
import DrawerCom from '../DrawerCom';
const { Header } = Layout;
// const { SubMenu } = Menu;
/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      document.querySelector('#container').className = 'container_fluid_scroll';
    } else {
      document.querySelector('#container').className = 'container_fluid';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawer = () => {
    setShowDrawer((showDrawer) => !showDrawer);
  };

  const closeDrawer = () => {
    setShowDrawer((showDrawer) => !showDrawer);
  };

  return (
    <div className='container_fluid' id='container'>
      <Header className='header' style={{ backgroundColor: 'transparent' }}>
        <div className='logo'>
          <PicLeftOutlined /> PORTFOLIO
        </div>
        <Menu
          theme='light'
          mode='horizontal'
          defaultSelectedKeys={[`1`]}
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
              CONTACT
            </Link>
          </Menu.Item>
          <AlignCenterOutlined className='icon' onClick={handleDrawer} />
        </Menu>
      </Header>
      <DrawerCom toShow={showDrawer} toClose={closeDrawer} />
    </div>
  );
};

export default Navbar;
//gadiyan rkhda kaliyan
