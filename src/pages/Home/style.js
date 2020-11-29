import colors from '../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${ colors.background};
    padding: 15px;
    flex: 1;
`;

export const HeaderContent = styled.View`
    margin-bottom: 60px;
`;

export const CardsContent = styled.View`
    background: pink;
    height: 50px;
`;