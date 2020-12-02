import colors from '../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${ colors.background};
    padding: 20px;
    flex: 1;
`;

export const Card = styled.View`
    background: #FFFFFF;
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
    margin-top: 3px;
`;

export const HeaderContent = styled.View`
    margin: 15px;
    padding: 6px;    
`;

export const CardsContent = styled.View`
    height: 380px;
`;

export const InfoBox = styled.View`
    margin-bottom: 3px;
    padding: 20px
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Description = styled.Text`
    color: ${colors.primary};
    font-size: 16px;
    text-align: left;
    margin-bottom: 30px;
    padding: 20px
`;

export const AddressContent = styled.View`
    margin-bottom: 25px;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
`;

export const Address = styled.Text`
    font-size: 16px;
    margin-left: 10px;
    color: ${colors.secondary};
`;

export const Button = styled.TouchableOpacity`
    background-color: ${colors.selected};
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 30px;
    margin: 20px;
`;

export const TitleButton = styled.Text`
    color: ${colors.white};
    font-size: 18px;
`;