import React from 'react';
import {View, Text} from 'react-native';
import {BgImage, Flex, styles} from '../../Styles/Styles';

export const Background = ({data}) => {

  return (
    <BgImage source={data.image} blurRadius={data.image_2?1.5:0}>
      <Flex style={{paddingTop: 45, padding: 30}}>
        <Text style={styles.LetsGo}>LET'S GO!</Text>
        <View style={styles.Line}></View>
        <Text style={[styles.Title, {color: data.title_1_color}]}>{data.title_1}</Text>
        <Text style={styles.Title}>{data.title_2}</Text>
      </Flex>
    </BgImage>
  );
};
