import React from 'react';

import { Container, Card, HeaderContent, CardsContent, Intro, Name, InfoBox } from './styles'

import Info from '../../components/Info';

import PetImage from '../../components/PetImage';


const Details = ({ route }) => {
  const { name, address, gender, age, image, breed, isFavorite} = route.params;
  return (
    <Container>
      <Card>
        <PetImage source={ image } isFavorite={ isFavorite } height={260}/>
        <HeaderContent>
          <Intro>Oi, meu nome é</Intro>
          <Name>{ name }</Name>
        </HeaderContent>
        <CardsContent>
          <InfoBox>
            <Info primaryText={ (age > 1) ? (age + ' anos') : (age + ' ano') } secondaryText='Idade'/>
            <Info primaryText={ gender } secondaryText='Gênero'/>
            <Info primaryText={ breed } secondaryText='Raça'/>
          </InfoBox>
        </CardsContent> 
      </Card>
    </Container>
  );
};

export default Details;