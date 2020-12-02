import React from 'react';

import { ScrollView } from 'react-native';

import colors from '../../styles/colors';

import { Container, Card, HeaderContent, CardsContent, Intro, Name, InfoBox, Description, Address, AddressContent, Button, TitleButton } from './styles'

import Info from '../../components/Info';
import PetImage from '../../components/PetImage';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const Details = ({ route }) => {
  const { name, address, gender, age, image, breed, isFavorite, description} = route.params;
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card>
          <PetImage source={ image } isFavorite={ isFavorite } height={260}/>
          <HeaderContent>
            <Intro>Oi, meu nome é</Intro>
            <Name>{ name }</Name>
          </HeaderContent>
          <CardsContent>
            <InfoBox>
              <Info primaryText={ (age > 1) ? (age + ' anos') : (age + ' ano') } secondaryText='Idade' align='auto'/>
              <Info primaryText={ <Ionicons name={'md-' + gender} size={26} color={colors.primary} />} secondaryText='Gênero' align='center' />
              <Info primaryText={ breed } secondaryText='Raça' align='auto' />
            </InfoBox>
            <Description>{description}</Description>
            <AddressContent>
              <MaterialIcons name="location-on" size={26} color={colors.primary}/>
              <Address>{address}</Address>
            </AddressContent>
            <Button>
              <TitleButton>Contactar dono</TitleButton>
            </Button>
          </CardsContent> 
      </Card>
      </ScrollView>
    </Container>
  );
};

export default Details;