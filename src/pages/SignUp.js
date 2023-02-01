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

            }}
            onFinish={onFinish}
            autoComplete="off"
          >
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
                offset: 8,
                span: 16,
              }}
            >
              Have an account? <span onClick={() => getLogin()}>Login</span>
            </Form.Item>

            

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" style={{ width: "60%" }}>
              Sign Up
              </Button>
            </Form.Item>



          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp