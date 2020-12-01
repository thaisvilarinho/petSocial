import React from 'react';
import Carousel from 'react-native-snap-carousel';

import { Dimensions } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Container, Card, Name, CardBody, NameContent, Address, Age } from './styles';

import PetImage from '../PetImage';

import colors from '../../styles/colors';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);


const PetCarousel = ({ data, onPress }) => {
  const cardHandler = (item) =>{
    if (onPress) {
      onPress(item);
    }
  };
  
  const renderItem = ({item, index})=>{
    return (
        <Card activeOpacity={1} onPress={() => cardHandler(item)}>
          <PetImage source={ item.image } isFavorite={ item.isFavorite }/>
          <CardBody>
            <Address>{ item.address }</Address>
            <NameContent>
              <Name>{ item.name } </Name>
                <Ionicons name={'ios-' + item.gender} size={26} color={colors.secondary}/>
            </NameContent>
            <Age>{ (item.age > 1) ? (item.age + ' anos') : (item.age + ' ano') }</Age>
          </CardBody>
        </Card>
    );
  };
  return (
    <Container>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
    </Container>
  );
};

export default PetCarousel;
