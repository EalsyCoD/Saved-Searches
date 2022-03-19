import React from 'react';



import { Container, TextLabel, Label, Input, Span } from './styles.js'

const Notifications = ({ toggle }) => {
    

    return (
        <Container>
            <TextLabel>Notifications</TextLabel>
            <Label>
                <Input type="checkbox" onChange={toggle}></Input>
                <Span />
            </Label>
        </Container>
    );
}

export default Notifications;
