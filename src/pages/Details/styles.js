import colors from '../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${ colors.background};
    padding: 20px;
    flex: 1;
`;

export const Card = styled.View`
    background: #FFFFFF;
    height: 650px;
    justify-content: flex-start;
    border-radius: 50px;
`;

export const Intro = styled.Text`
    font-size: 20px;
    color: ${colors.secondary};
`;

export const Name = styled.Text`
    color: ${colors.primary};
    font-size: 30px;
    font-weight: bold;
`;

export const HeaderContent = styled.View`
    margin: 15px;
    padding: 8px;
    
`;

export const CardsContent = styled.View`
    height: 400px;
`;

export const InfoBox = styled.View`
    padding: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;