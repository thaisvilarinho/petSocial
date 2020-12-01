import React from 'react';

import { Background } from './styles';

import { Ionicons } from '@expo/vector-icons';

const PetImage = ({source, isFavorite}) => {
  return (
    <Background source={ source } imageStyle={{ borderRadius: 50 }}>
        <Ionicons name='md-heart' size={40} 
          color={ isFavorite ? '#bf1120' : 'white'}
        />
    </Background>
  );
};

export default PetImage;
