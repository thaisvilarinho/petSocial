import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
`;

export const SecondaryText = styled.Text`
    color: ${ colors.secondary };
    font-size: 16px;
    padding-bottom: 5px;
`;

export const PrimaryText = styled.Text`
    color: ${ colors.primary };    
    font-weight: bold;
    font-size: 18px;
    align-self: ${ props => props.align };
`;
