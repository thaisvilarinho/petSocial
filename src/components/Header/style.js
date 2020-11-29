import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const SecondaryText = styled.Text`
    color: ${ colors.secondary };
    font-size: 32px;
`;

export const PrimaryText = styled(SecondaryText)`
    color: ${ colors.primary };    
    font-weight: bold;
`;

