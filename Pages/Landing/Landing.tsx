import React from 'react';
import {View, Text, Pressable, FlatList, ImageBackground} from 'react-native';
import {BgImage, Flex, styles} from '../../Styles/Styles';
import {Data} from '../../Data/Landing/data';
import {Background} from '../../Components';
import {BlurView} from '@react-native-community/blur';

export const Landing = () => {
  return (
    <Flex>
      <FlatList
        pagingEnabled
        horizontal
        data={Data}
        renderItem={({item}) => <Background data={item} />}
        numColumns={1}
      />
      <BlurView
        style={styles.Explore}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white">
        <Pressable onPress={() => {}}>
          <Text style={styles.ExploreText}>EXPLORE THE CITY</Text>
        </Pressable>
      </BlurView>
    </Flex>
  );
};
