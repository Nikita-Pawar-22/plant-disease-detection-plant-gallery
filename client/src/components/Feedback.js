import React, { useState } from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    background-color: #333;
    color: #fff;
    border-radius: 5px;
    display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const Feedback = ({ message, type }) => {
    const [visible, setVisible] = useState(false);

    const showMessage = (msg) => {
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
    };

    return <FeedbackContainer visible={visible}>{message || "Action completed successfully!"}</FeedbackContainer>;
};

export default Feedback;
