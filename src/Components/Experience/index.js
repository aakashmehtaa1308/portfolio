import React from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import './style.css';

import { ManOutlined } from '@ant-design/icons';
import Heading from '../Heading';
import GridCol from '../GridCol';

const { Title, Paragraph } = Typography;
/**
 * @author
 * @function Experience
 **/

const Experience = (props) => {
  const val = 'EXPERIENCE';
  return (
    <div id='experience' className='experience'>
      <Heading title={val} />

      <Row
        className='experience_row'
        gutter={[16, 16]}
        align='middle'
        justify='center'
      >
        <GridCol
          designation1={'POSITION'}
          designation1_answer={'Front End Web Developer'}
          designation2={'COMPANY'}
          designation2_answer={'Vkarma Edutech Private Limited'}
          summary={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`}
          btnInfo={'Visit Vkarma'}
          href={'https://vkarma.in/'}
        />
      </Row>
    </div>
  );
};

export default Experience;
