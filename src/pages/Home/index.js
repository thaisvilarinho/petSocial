import React from 'react';
import { Text, Button } from 'react-native';

import { Container, HeaderContent, CardsContent } from './style'

import Header from  '../../components/Header';

export default Home = ( { navigation } )=>{

    return (
        <Container>
            <HeaderContent>
                <Header primaryText='purrfect match' secondaryText='Find your'/>
            </HeaderContent>
            <CardsContent>
                
            </CardsContent>            
            {/*<Button title='Ir para a tela Detalhes' onPress={()=> navigation.navigate('Details')}/>*/}
        </Container>
        
    );
};