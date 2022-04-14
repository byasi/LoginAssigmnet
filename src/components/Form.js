import { Form, Input, Button, Checkbox,Steps } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import { useState } from 'react';
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
    const [current, setCurrent] = useState(0);

  return (
    <div className="col-md-6 col-lg-5">
        <div className='login-box'>
            <div className='login-title'>
                <h2>Ziadanet</h2>
            </div>
            <h6>CREATE AN ACCOUNT</h6>
        <Form
    style={{background:"#fff"}}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
        <Steps current={current} className='steps'>
        {steps.map(item => (
          <Step className='step' key={item.title} title={item.title} />
        ))}
      </Steps>
     
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
          <label>Password</label>
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
          <label>Confirm Password</label>
        <Input
          type="password"
          name="password"
          className="form-control form-control-lg"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox >I agree of the terms of use and policy</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className="login-form-button">
        Register
        <ArrowRightOutlined className='icon'/> 
        </Button>
      </Form.Item>
      <p>Don't have an account yet. <b>Signup</b></p>
    </Form>
        </div>
        </div>
  );
};

export default LoginForm;
