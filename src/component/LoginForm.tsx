import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {AppDispatch} from "../store";
import {useAction} from "../hooks/UseAction";
import {useTypedSelector} from "../hooks/useTypedSelector";

const LoginForm: FC = () => {

    const {login} = useAction()
    const {loading, error} = useTypedSelector((state => state.auth))
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = () => {
        login(username, password)
    }

    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{color: "red"}}>
                {error}
            </div>}
            {loading && <div style={{color: "blue"}}>
                немного подождите...
            </div>}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required("Пожалуйста введите имя пользователя!")]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required("Пожалуйста введите пароль!")]}
            >
                <Input value={password} onChange={e => setPassword(e.target.value)} type={"password"}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;