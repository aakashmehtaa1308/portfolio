import React from 'react';
import { Row, Col, Button } from 'antd';
import image from '../../images/aakash.jpg';
import { DownloadOutlined } from '@ant-design/icons';
import Typing from 'react-typing-animation';

import './style.css';
/**
 * @author
 * @function About
 **/

const About = (props) => {
  const text =
    'I am AAKASH , currently doing graduation in information Technology from GGSIPU.I am a MERN Stack Web Developer with expertise in various languages and Frameworks like ReactJs, NodeJs, ExpressJs Bootstrap, Material UI, Ant Design, JavaScript, HTML/CSS, and a database MongoDB.';
  return (
    <div id='about' className='aboutHead'>
      <Row
        gutter={[0, 24]}
        className='about'
        justify='center'
        align='middle'
        style={{ width: '100%' }}
      >
        <Col xs={20} lg={12} className='about_in1'>
          <img className='img' src={image} alt='image not found' />
        </Col>
        <Col xs={20} lg={12} className='about_in2'>
          <div
            className='text_description'
            style={{ width: '90%', marginLeft: '5%' }}
          >
            <Typing speed={30} className='typing'>
              {text}
            </Typing>
          </div>

          <Button
            style={{ float: 'left' }}
            className='btn'
            type='primary'
            shape='round'
            size='large'
          >
            <a
              style={{ color: 'white', fontSize: '1.5rem' }}
              className='Download'
              href='https://drive.google.com/file/d/1lciRv2cTjzuAkDPl77vZgMr-urF70H_D/view?usp=sharing'
              target='_blank'
            >
              <DownloadOutlined
                style={{
                  color: 'white',
                  marginRight: '1rem',
                  fontSize: '1.5rem',
                }}
              />
              Download CV
            </a>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default About;
