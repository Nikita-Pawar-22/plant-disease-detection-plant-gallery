// src/components/Login.js

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 400px;
    margin: auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Title = styled.h2`
    margin-bottom: 1.5rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 0.8rem;
    margin: 0.5rem 0;
    border-radius: 4px;
    border: 1px solid #ddd;
`;

const Button = styled.button`
    padding: 0.8rem;
    margin-top: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const Login = () => {
    return (
        <Container>
            <Title>Login</Title>
            <Form>
                <Input type="text" placeholder="Username" required />
                <Input type="password" placeholder="Password" required />
                <Button type="submit">Login</Button>
            </Form>
            <p>Don't have an account? Sign up here!</p>
        </Container>
    );
};

export default Login;
