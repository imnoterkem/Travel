import styled from 'styled-components/native';
import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const BgImage = styled.ImageBackground`
  width: ${width}px;
  height: ${height}px;
`;

export const Flex = styled.View`
  flex: 1;
`;

export const styles = StyleSheet.create({
  LetsGo: {
    zIndex: 1,
    fontSize: 14,
    color: '#EA8246',
    letterSpacing: 0.1,
    fontWeight: '600',
  },
  Title: {
    fontSize: 45,
    marginTop: 5,
    fontFamily: 'Times New Roman',
  },
  Line: {
    margin: 10,
    marginLeft: -30,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: '#E6E4DF',
  },
  Explore: {
    width: '90%',
    height: '9%',
    borderRadius: 5,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    position: 'absolute',
    bottom: 30,
    left: 20,
  },
  ExploreText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
});
