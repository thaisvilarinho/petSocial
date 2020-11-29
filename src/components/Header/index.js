import React from 'react';
import {PrimaryText, SecondaryText} from './style';

export default Header = ({primaryText, secondaryText}) =>{
    return (
        <>
            <SecondaryText>{secondaryText}</SecondaryText>
            <PrimaryText>{primaryText}</PrimaryText>
        </>
    
        )
};
