import React from 'react';
import {Container, PrimaryText, SecondaryText} from './styles';

export default Header = ({primaryText, secondaryText, align}) =>{
    return (
        <Container>
            <SecondaryText>{secondaryText}</SecondaryText>
            <PrimaryText align={align}>{primaryText}</PrimaryText>
        </Container>
    
        )
};

