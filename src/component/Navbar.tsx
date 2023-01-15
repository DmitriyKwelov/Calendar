import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {redirect} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import {useAction} from "../hooks/UseAction";

const Navbar: FC = () => {

    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useAction()

    return (
        <Layout.Header >
            {isAuth ?
                <>
                    <Menu theme="dark" mode="horizontal">
                        <div style={{color: 'white'}}>
                            {user.username}
                        </div>
                        <Menu.Item onClick={logout} key={1}>Выйти</Menu.Item>
                    </Menu>
                </>
                :
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item onClick={() => redirect('/login')} key={1}>Логин</Menu.Item>
                </Menu>
            }
        </Layout.Header>
    );
};

export default Navbar;