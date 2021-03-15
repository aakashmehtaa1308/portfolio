import React from 'react';
import { Row, Col } from 'antd';

import './style.css';
import Heading from '../Heading';
import ProgressBar from '../ProgressBar';
/**
 * @author
 * @function Skills
 **/

const Skills = (props) => {
  const val = 'SKILLS';
  return (
    <div id='skills' className='skills'>
      <Heading title={val} />
      <Row className='skill_row' gutter={[0, 16]}>
        <Col className='skill_col' xm={20} sm={20} md={20} span={12}>
          <Row justify='space-between'>
            <Col className='skill_col_1' xm={20} sm={20}>
              CPP
            </Col>
            <Col xm={20} sm={20}>
              <ProgressBar percent={99} />
            </Col>
          </Row>
        </Col>
        <Col className='skill_col' xm={20} sm={20} md={20} span={12}>
          <Row justify='space-between'>
            <Col className='skill_col_1' sm={20}>
              Data Structure
            </Col>
            <Col sm={20}>
              <ProgressBar percent={90} />
            </Col>
          </Row>
        </Col>
        <Col className='skill_col' xm={20} sm={20} md={20} span={12}>
          <Row justify='space-between'>
            <Col className='skill_col_1' sm={20}>
              HTML
            </Col>
            <Col sm={20}>
              <ProgressBar percent={99.9} />
            </Col>
          </Row>
        </Col>
        <Col className='skill_col' xm={20} sm={20} md={20} span={12}>
          <Row justify='space-between'>
            <Col className='skill_col_1' sm={20}>
              CSS
            </Col>
            <Col sm={20}>
              <ProgressBar percent={97} />
            </Col>
          </Row>
        </Col>
        <Col className='skill_col' xm={20} sm={20} md={20} span={12}>
          <Row justify='space-between'>
            <Col className='skill_col_1' sm={20}>
              JavaScript
            </Col>
            <Col sm={20}>
              <ProgressBar percent={90} />
            </Col>
          </Row>
        </Col>
        <Col className='skill_col' xm={20} sm={20} md={20} span={12}>
          <Row justify='space-between'>
            <Col className='skill_col_1' sm={20}>
              ReactJs
            </Col>
            <Col sm={20}>
              <ProgressBar percent={85} />
            </Col>
          </Row>
        </Col>
        <Col className='skill_col' xm={20} sm={20} md={20} span={12}>
          <Row justify='space-between'>
            <Col className='skill_col_1' sm={20}>
              Ant Design
            </Col>
            <Col sm={20}>
              <ProgressBar percent={80} />
            </Col>
          </Row>
        </Col>
        <Col className='skill_col' xm={20} sm={20} md={20} span={12}>
          <Row justify='space-between'>
            <Col className='skill_col_1' sm={20}>
              NodeJs
            </Col>
            <Col sm={20}>
              <ProgressBar percent={85} />
            </Col>
          </Row>
        </Col>
        <Col className='skill_col' xm={20} sm={20} md={20} span={12}>
          <Row justify='space-between'>
            <Col className='skill_col_1' sm={20}>
              ExpressJs
            </Col>
            <Col sm={20}>
              <ProgressBar percent={88} />
            </Col>
          </Row>
        </Col>
        <Col className='skill_col' xm={20} sm={20} md={20} span={12}>
          <Row justify='space-between'>
            <Col className='skill_col_1' sm={20}>
              MongoDB
            </Col>
            <Col sm={20}>
              <ProgressBar percent={95} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
