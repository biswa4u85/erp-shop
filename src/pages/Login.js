import React from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { apiPostCall } from '../hooks/SiteAPIs'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Button, Form, Input, Row, Col } from 'antd';

function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token", null);
  const [user, setUser] = useLocalStorage("user", null);
  const onFinish = async (values) => {
    let results = await apiPostCall('/api/method/erp_custom_auth.authentication.login', values, window.frappe?.csrf_token)
    if (results && results.status_code == 200) {
      setToken(results.token)
      setUser(results.user)
      setTimeout(() => navigate('/'))
    } else {
      toast.error(results.text)
    }
  };

  const getLogin = () => {
    navigate('/signup')
  }

  const layout = {
    labelCol: {
      span: 6,
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
            "usr": "administrator",
            "pwd": "admin"
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
            Don't have an account? <a className="text-danger-emphasis text-decoration-none" onClick={() => getLogin()}> Sign Up</a>
          </Form.Item>

          <Form.Item
            label="Username"
            name="usr"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="pwd"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" style={{ width: "60%" }}>
              Login
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

export default Login