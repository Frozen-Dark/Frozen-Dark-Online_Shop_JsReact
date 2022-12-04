import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";


const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;
    console.log(location)

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 70}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto mb-4">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш email..."
                   />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш пароль..."
                   />
                    <Form className="d-flex justify-content-between mt-3 pl-3 pr-3  mt-4">
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        </div>
                        <Button
                            variant={"outline-success"}
                            className="align-self-end"
                        >
                            Войти
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;