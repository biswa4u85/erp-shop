import React from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { apiPostCall } from '../hooks/SiteAPIs'
import { Button, Form, Input, Row, Col } from 'antd';

function SignUp() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    let params = `cmd=frappe.core.doctype.user.user.sign_up&email=${values.email}&redirect_to=&full_name=${values.full_name}`;
    let results = await apiPostCall('/', params, window.frappe?.csrf_token)
    if (results && results[1]) {
      toast.error(results[1]);
      setTimeout(() => navigate('/login'), 100)
    }
  };

  const getLogin = () => {
    navigate('/login')
  }
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (

    <div className="login-bg">
      <div class="main-form shadow p-3  bg-body-tertiary rounded-3">
        <Form
          {...layout}
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
            width:"100%",
          }}
          initialValues={{

          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            Have an account? <a className="text-danger-emphasis text-decoration-none" onClick={() => getLogin()}>Login</a>
          </Form.Item>

          <Form.Item
            label="Full Name"
            name="full_name"
            rules={[
              {
                required: true,
                message: 'Please input your Full Name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
              {
                type: 'email',
                message: 'please input a valid email address!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" style={{ width: "60%" }}>
              Sign Up
            </Button>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <a href="#" className="text-danger-emphasis text-decoration-none" style={{ fontSize: "12px" }}>terms and conditions apply</a>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
}

export default SignUp