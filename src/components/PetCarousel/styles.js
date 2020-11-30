import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
`;

export const Card = styled.TouchableOpacity`
    background: #FFFFFF;
    height: 400px;
    justify-content: flex-start;
    border-radius: 50px;
`;
//AQUI
export const PetImage = styled.ImageBackground`
    height: 180px;
    border-radius: 20px;   
    flex-direction: row; 
    justify-content: flex-end;
    padding: 20px;
`;
/*
export const Card = styled.View`
    background: #FFFFFF;
    height: 400px;
    justify-content: flex-start;
    border-radius: 50px;  
`;*/

export const CardBody = styled.View`
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    height: 150px;
`;

export const NameContent = styled.View`
    margin-top: 20px;
    margin-bottom: 5px;
    flex-direction: row;
    align-items: center;
`;

export const Name = styled.Text`
    color: ${colors.primary};
    font-size: 26px;
    font-weight: bold;
    margin-right: 10px;
`;

export const Address = styled.Text`
    font-size: 16px;
    color: ${colors.secondary};
`;

export const Age = styled.Text`
    font-size: 16px;
`;

