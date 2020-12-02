import colors from '../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${ colors.background};
    padding: 20px;
    flex: 1;
`;

export const HeaderContent = styled.View`
    margin-bottom: 40px;
`;

export const Options = styled.View`
    margin-bottom: 30px;
    padding: 5px 0 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const ItemOption = styled.Text`
    background-color: ${ colors.white };
    color: ${ colors.primary };
    padding-top: 3px;
    height: 30px;
    width: 50px;
    border-radius: 20px;
    margin: 3px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const CardsContent = styled.View`
    height: 400px;
`;