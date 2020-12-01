import React from 'react';
import {Container, PrimaryText, SecondaryText} from './styles';

export default Header = ({primaryText, secondaryText}) =>{
    return (
        <Container>
            <SecondaryText>{secondaryText}</SecondaryText>
            <PrimaryText>{primaryText}</PrimaryText>
        </Container>
    
        )
};

