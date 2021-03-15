import { Row, Col } from 'antd';
import React from 'react';

import codeforces from '../../images/codeforces.png';
import codechef from '../../images/codechef.png';
import hackerrank from '../../images/hackerrank.png';
import github from '../../images/github.png';

import { LinkedinFilled, LinkedinOutlined } from '@ant-design/icons';

import './style.css';
/**
 * @author
 * @function FooterCom
 **/

const FooterCom = (props) => {
  return (
    <div className='footer'>
      <hr className='line' />
      <div className='container-fluid'>
        <Row gutter={[128, 32]} justify='space-around'>
          <Col>
            <a
              href='https://codeforces.com/profile/Mehtaa08'
              className='col_users'
              target='_blank'
            >
              <img src={codeforces} alt='img' style={{ width: '2rem' }} />{' '}
              Codeforces
            </a>
          </Col>
          <Col>
            <a
              href='https://www.codechef.com/users/aakash_07'
              className='col_users'
              target='_blank'
            >
              <img
                src={codechef}
                alt='img'
                style={{ width: '3rem', color: 'whitesmoke' }}
              />
              codechef
            </a>
          </Col>
          <Col>
            <a
              href='https://www.hackerrank.com/aakashmehtaa1308'
              className='col_users'
              target='_blank'
            >
              <img src={hackerrank} alt='img' style={{ width: '3rem' }} />
              hackerRank
            </a>
          </Col>
          <Col>
            <a
              href='https://www.linkedin.com/in/aakash-mehta-a0479716a/'
              className='col_users'
              target='_blank'
            >
              <LinkedinOutlined style={{ color: 'white' }} /> LinkedIn
            </a>
          </Col>
          <Col>
            <a
              href='https://github.com/aakashmehtaa1308'
              className='col_users'
              target='_blank'
            >
              <img src={github} alt='img' style={{ width: '2rem' }} /> github
            </a>
          </Col>
        </Row>
      </div>
      <hr className='line' />
    </div>
  );
};

export default FooterCom;
