import React from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import './style.css';

import { ManOutlined } from '@ant-design/icons';
import Heading from '../Heading';

const { Title, Paragraph } = Typography;
/**
 * @author
 * @function Experience
 **/

const Experience = (props) => {
    const val = 'EXPERIENCE'
  return (
    <div className='experience'>
      <Heading title={val}/>

      <Row
        className='experience_row'
        gutter={[16, 16]}
        align='middle'
        justify='center'
      >
        <Col className='experience_col' span={20}>
          <Title style={{ color: 'turquoise', marginTop: '2rem' }} level={3}>
            POSITION : <em>Front End Web Developer</em>
          </Title>
          <Title style={{ color: 'turquoise' }} level={3}>
            COMPANY : <em>Vkarma Edutech Private Limited</em>
          </Title>
          <div className='paragraph'>
            <Paragraph className='paragraph_body'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Paragraph>
          </div>
          <Button className='btn2' type='primary' shape='round'>
            <a
              style={{ color: 'white', fontSize: '1.5rem' }}
              href='https://vkarma.in/'
              target='_blank'
            >
              <ManOutlined
                style={{
                  color: 'white',
                  marginRight: '1rem',
                  fontSize: '1.5rem',
                }}
              />
              Visit Vkarma
            </a>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
