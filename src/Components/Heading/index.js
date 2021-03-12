import React from 'react';
import { Typography } from 'antd';
/**
 * @author
 * @function Heading
 **/
import './style.css';

const {Title} = Typography;

const Heading = (props) => {
  return (
    <div>
      <Title level={1} className='typo_head'>
        <em className='typo'>{props.title}</em>
      </Title>
    </div>
  );
};

export default Heading;
