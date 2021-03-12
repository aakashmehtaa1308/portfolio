import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import ProgressBar from '../ProgressBar';
import {ManOutlined} from '@ant-design/icons';
import './style.css';
const { Title, Paragraph} = Typography;

/**
 * @author
 * @function GridCol
 **/

const GridCol = (props) => {
  return (
    <Col className='experience_col' span={20}>
      <Title style={{ color: 'turquoise', marginTop: '2rem' }} level={3}>
        {props.designation1} : <em>{props.designation1_answer}</em>
      </Title>
      <Title style={{ color: 'turquoise' }} level={3}>
        {props.designation2} : <em>{props.designation2_answer}</em>
      </Title>
      <div className='paragraph'>
        <Paragraph className='paragraph_body'>
          {props.summary}
        </Paragraph>
      </div>
      <Button className='btn2' type='primary' shape='round'>
        <a
          style={{ color: 'white', fontSize: '1.5rem' }}
          href={props.href}
          target='_blank'
        >
          <ManOutlined
            style={{
              color: 'white',
              marginRight: '1rem',
              fontSize: '1.5rem',
            }}
          />
          {props.btnInfo}
        </a>
      </Button>
    </Col>
  );
};

export default GridCol;
