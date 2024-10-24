import React from 'react';
import { Form, Input } from 'antd';

interface BasicFormInput {
  username: string;
}

const App: React.FC = () => {
  return (
    <Form<BasicFormInput>
      name='basic_form'
      layout='vertical'
      initialValues={{ usename: 'Default username' }}
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='Enter your username' />
      </Form.Item>
    </Form>
  );
};

export default App;