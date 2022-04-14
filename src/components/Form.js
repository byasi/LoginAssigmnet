import { Form, Input, Button, Checkbox,Steps,Typography} from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import { useState } from 'react';

const { Text } = Typography;
const { Step } = Steps;

const steps = [
  {
    title: '',
    content: 'First-content',
  },
  {
    title: '',
    content: 'Second-content',
  },
];

const LoginForm = () => {

  return (
    <div className="col-md-6 col-lg-5">
        <div className='login-box'>
            <div className='login-title'>
                <h2>Ziadanet</h2>
            </div>
            <h6>CREATE AN ACCOUNT</h6>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
        <Steps current={1} className='steps'>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
     
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
          <Text className='label'>Password</Text>
        <Input  className="form-control form-control-lg"/>
      </Form.Item>
      <Form.Item
      type="password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
          <Text className='label'>Confirm Password</Text>
        <Input
          type="password"
          name="password"
          className="form-control form-control-lg"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item valuePropName="checked">
          <Checkbox className='check-box' >I agree of the <b>terms of use</b> and <b>policy</b></Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className="login-form-button">
        Register
        <ArrowRightOutlined className='icon'/> 
        </Button>
      </Form.Item>
      <p>Don't have an account yet? <b>Sign Up</b></p>
    </Form>
        </div>
        </div>
  );
};

export default LoginForm;
