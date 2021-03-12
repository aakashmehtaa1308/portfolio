import React from 'react';
import Heading from '../Heading';
import { Row, Col, Typography, Button } from 'antd';
import './style.css';

import { ManOutlined } from '@ant-design/icons';
import GridCol from '../GridCol';
import Grid from 'antd/lib/card/Grid';

const { Title, Paragraph } = Typography;

/**
 * @author
 * @function Project
 **/

const Project = (props) => {
  const val = 'PROJECTS';
  return (
    <div className='projects'>
      <Heading title={val} />
      <Row
        className='experience_row'
        gutter={[16, 6]}
        align='middle'
        justify='space-around'
      >
        <GridCol
          designation1={'TITLE'}
          designation1_answer={'ONLINE SHOPPING CART'}
          designation2={'TECH-USED'}
          designation2_answer={'NODE_JS, EXPRESS_JS, EJS, MONGO_DB, HTML, CSS'}
          summary={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`}
          btnInfo={'Visit Project'}
          href={'https://realtime-shopping-cart.herokuapp.com/'}
        />
        <GridCol
          designation1={'TITLE'}
          designation1_answer={'A BURGER BUILDER'}
          designation2={'TECH-USED'}
          designation2_answer={'REACT_JS, REDUX, FIREBASE, HTML, CSS'}
          summary={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`}
          btnInfo={'Visit Project'}
          href={'https://react-my-burger-50b9e.web.app/'}
        />
        <GridCol
          designation1={'TITLE'}
          designation1_answer={'A JavaScript Game'}
          designation2={'TECH-USED'}
          designation2_answer={'HTML, CSS, JavaScript'}
          summary={`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make `}
          btnInfo={'Visit Project'}
          href={'https://aakashmehtaa1308.github.io/javascript-game/'}
        />
      </Row>
    </div>
  );
};

export default Project;
