import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Background = styled.ImageBackground`
    height: ${props => props.height + 'px'};
    border-radius: 20px;   
    flex-direction: row; 
    justify-content: flex-end;
    padding: 20px;
`;