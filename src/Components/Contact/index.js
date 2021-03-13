import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Heading from '../Heading';
import './style.css';

const { TextArea } = Input;
/**
 * @author
 * @function Contact
 **/

const Contact = (props) => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div id='contact' className='contact_component'>
      <Heading title={'CONTACT'} />
      <Form
        className='contact_form'
        {...layout}
        name='basic'
        initialValues={{
          remember: true,
        }}
        colon={false}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input className='input_field' />
        </Form.Item>

        <Form.Item
          label='Contact No.'
          name='contact'
          rules={[
            {
              required: true,
              message: 'Please input your Contact No!',
            },
          ]}
        >
          <Input className='input_field' />
        </Form.Item>
        <Form.Item
          label='Subject'
          name='subject'
          rules={[
            {
              required: true,
              message: 'Please input Subject!',
            },
          ]}
        >
          <Input className='input_field' />
        </Form.Item>
        <Form.Item label='Message' name='message'>
          <TextArea
            allowClear
            autoSize={{ minRows: 2, maxRows: 20 }}
            className='text_field'
            maxLength={800}
            rows={3}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button className='button' type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
