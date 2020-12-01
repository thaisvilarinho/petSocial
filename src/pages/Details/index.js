import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

const Details = ({ route }) => {
  const { name, address, gender, age} = route.params;
  return (
    <Container>
      <Text>{ name }</Text>
      <Text>{ address }</Text>
      <Text>{ gender }</Text>
      <Text>{ age }</Text>
    </Container>
  );
};

export default Details;