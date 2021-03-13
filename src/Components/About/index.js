import React from 'react';
import { Row, Col, Button } from 'antd';
import image from '../../images/aakash.jpg';
import { DownloadOutlined } from '@ant-design/icons';
import CV from '../../images/resume_aakash_GGSIPU.pdf';
import './style.css';
/**
 * @author
 * @function About
 **/

const About = (props) => {
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
          <img className='img' src={image} />
        </Col>
        <Col xs={20} lg={12} className='about_in2'>
          <div style={{ width: '90%', marginLeft: '5%' }}>
            I am{' '}
            <em>
              <strong>AAKASH</strong>
            </em>
            , currently doing graduation with information Technology.I am a{' '}
            <em>
              <strong>MERN</strong>
            </em>{' '}
            Stack Web Developer with expertise in various languages and
            Frameworks like ReactJs, NodeJs, ExpressJs Bootstrap, Material UI,
            Ant Design, JavaScript, HTML/CSS, and a database MongoDB.
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
              href={CV}
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
