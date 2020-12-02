import React from 'react';

import colors from '../../styles/colors';

import { Container, HeaderContent, Options, ItemOption, CardsContent } from './style'

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
        {name:'Mingau', 
         address: 'Capinópolis, MG ', 
         gender: 'male', 
         age: '2', 
         breed: 'Mixed', 
         isFavorite: true, 
         image: Cat1,
         description: 'Mingau é um gato charmoso de 2 anos de idade e aguarda uma família afetuosa e cuidadosa.',
        },
        {name:'Batatinha', 
         address: 'Ituiutaba, MG ', 
         gender: 'female', 
         age: '1', 
         breed: 'LaPerm', 
         isFavorite: true, 
         image: Cat2,
         description:'Batatinha é um gata meiga de 1 ano de idade que sempre será sua melhor amiga em todos os momentos de sua vida.',
        },
        {name:'Rabicho', 
         address: 'Uberlândia, MG ', 
         gender: 'male', 
         age: '3', 
         breed: 'Mixed', 
         isFavorite: false, 
         image: Cat3,
         description:'Rabicho é um gato esperto de 3 anos de idade que te fará a melhor companhia e te proporcioná muitos momentos felizes.',
        },
        {name:'Tigrinha', 
         address: 'Ipiaçu, MG ', 
         gender: 'female', 
         age: '1', 
         breed: 'Bombay', 
         isFavorite: true, 
         image: Cat4,
         description: 'Tigrinha é um gata brincalhona de 1 ano de idade que irá alegrar o seu lar, pois tem muita energia e amor.',
        },
        {name:'Bolota', 
         address: 'Cachoeira-Dourada, MG ', 
         gender: 'male', 
         breed: 'Nebelung', 
         isFavorite: false, 
         age: '4', 
         image: Cat5,
         description: 'Bolota é um gato carinhoso de 4 anos de idade que adora um bom cafuné.',
        },
      ]

    return (
        <Container>
            <HeaderContent>
                <Header primaryText='purrfect match' secondaryText='Find your'/>
            </HeaderContent>
            <Options>
                <ItemOption>All</ItemOption>
                <ItemOption style={{ backgroundColor: colors.selected, color: colors.white}}>Cats</ItemOption>
                <ItemOption>Dogs</ItemOption>
                <ItemOption>Birds</ItemOption>
            </Options>
            <CardsContent>
                <PetCarousel data={cats} onPress={carouselHandler}/>
            </CardsContent>            
        </Container>
        
    );
};