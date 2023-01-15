import React, {useEffect} from 'react';
import AppRouter from "./component/AppRouter";
import Navbar from "./component/Navbar";
import {Layout} from "antd";
import './App.css';
import {useAction} from "./hooks/UseAction";
import {IUser} from "./models/IUser";

const App = () => {
    const {setIsAuth, setUser} = useAction()

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true);
        }
    }, [])

    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
};

export default App;