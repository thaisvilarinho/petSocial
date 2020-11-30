import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

//import PetImage from '../../components/PetImage'

const Details = ({ route }) => {
  //const { name, address, gender, age, image, isFavorite } = route.params;
  const { name, address, gender, age} = route.params;
  return (
    <Container>
      {/*<PetImage source={ image } isFavorite={ isFavorite } height={400}/>*/}
      <Text>{ name }</Text>
      <Text>{ address }</Text>
      <Text>{ gender }</Text>
      <Text>{ age }</Text>
    </Container>
  );
};

export default Details;