import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss'

interface SubmitTypes {
    username: String,
    password: String,
    remember: Boolean
}

const Login: React.FC = (props): JSX.Element => {
    const history = useHistory()
    const onFinish = (values: SubmitTypes) => {
        history.push('/')
    };

    return <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
    >
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
        >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className={styles.white}>Remember me</Checkbox>
            </Form.Item>

            <a className={`login-form-forgot ${styles.white}`} href="">
                Forgot password
        </a>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
        </Button>
        Or <a href="" className={styles.white}>register now!</a>
        </Form.Item>
    </Form>
}

export default Login