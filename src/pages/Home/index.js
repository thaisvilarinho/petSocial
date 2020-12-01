import React from 'react';

import { Container, HeaderContent, CardsContent } from './style'

import Cat1 from '../../images/cats/cat1.jpg';
import Cat2 from '../../images/cats/cat2.jpg';
import Cat3 from '../../images/cats/cat3.jpg';
import Cat4 from '../../images/cats/cat4.jpg';
import Cat5 from '../../images/cats/cat5.jpg';

import Header from  '../../components/Header';
import PetCarousel from '../../components/PetCarousel';

export default Home = ( { navigation } )=>{

    const carouselHandler = (item)=> {
        navigation.navigate('Details', item);
    };

    const cats = [
        {name:'Mingau', address: 'Capinópolis, MG ', gender: 'male', age: '2', breed: 'Mixed', isFavorite: true, image: Cat1},
        {name:'Batatinha', address: 'Ituiutaba, MG ', gender: 'female', age: '1', breed: 'LaPerm', isFavorite: true, image: Cat2},
        {name:'Rabicho', address: 'Uberlândia, MG ', gender: 'male', age: '3', breed: 'Mixed', isFavorite: false, image: Cat3},
        {name:'Tigrinha', address: 'Ipiaçu, MG ', gender: 'female', age: '1', breed: 'Bombay', isFavorite: true, image: Cat4},
        {name:'Bolota', address: 'Cachoeira-Dourada, MG ', gender: 'male', breed: 'Nebelung', isFavorite: false, age: '4', image: Cat5},    
      ]

    return (
        <Container>
            <HeaderContent>
                <Header primaryText='purrfect match' secondaryText='Find your'/>
            </HeaderContent>
            <CardsContent>
                <PetCarousel data={cats} onPress={carouselHandler}/>
            </CardsContent>            
        </Container>
        
    );
};