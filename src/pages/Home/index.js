import React from 'react';
import { Text, Button } from 'react-native';

export default Home = ( { navigation } )=>{

    return (
        <>
            <Text>Página Home</Text>
            <Button title='Ir para a tela Detalhes' onPress={()=> navigation.navigate('Details')}/>
        </>
        
    );
};