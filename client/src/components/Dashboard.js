import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-width: 800px;
    margin: auto;
    text-align: center;
`;

const NavButton = styled(Link)`
    display: block;
    padding: 1rem 2rem;
    margin: 1rem;
    background-color: #4CAF50;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        background-color: #45a049;
    }
`;

const Dashboard = () => {
    return (
        <Container>
            <h1>Plant Detection Dashboard</h1>
            <NavButton to="/predict">Go to Prediction Tool</NavButton>
            <NavButton to="/learn">Go to Real-Time Learning</NavButton>
        </Container>
    );
};

export default Dashboard;
