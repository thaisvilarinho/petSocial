import React from 'react';
import { Text, Button } from 'react-native';

export default Details = ({ navigation }) => {

    return (
        <>
            <Text>Página Detalhes</Text>
            <Button title='Ir para a tela Perfil' onPress={()=> navigation.navigate('Profile')}/>
        </>
    );

};