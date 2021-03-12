import React from 'react';
import { Progress, Row, Col } from 'antd';
/**
 * @author
 * @function ProgressBar
 **/

import './style.css';

const ProgressBar = (props) => {
  return (
    <div>
      <div className='progress_bar'>
        <Progress
          strokeColor={{
            from: '#108ee9',
            to: '#87d068',
          }}
          percent={props.percent}
          status='active'
          showInfo={false}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
