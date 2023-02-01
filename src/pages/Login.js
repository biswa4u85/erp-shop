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
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (


    <div class="main-form text-center py-5">

      <Row>
        <Col span={12} offset={5}>
          <Form
            {...layout}
            name="basic"
            // labelCol={{
            //   span: 8,
            // }}
            // wrapperCol={{
            //   span: 16,
            // }}
            // style={{
            //   maxWidth: 600,
            // }}
            initialValues={{
              "usr": "administrator",
              "pwd": "admin"
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
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
                offset: 8,
                span: 16,
              }}
            >
              Don't have an account? <span onClick={() => getLogin()}> Sign Up</span>
            </Form.Item>



            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" style={{ width: "60%" }}>
                Login
              </Button>
            </Form.Item>









          </Form>
        </Col>
      </Row>

    </div>
  );
}

export default Login