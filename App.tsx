import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Landing} from './Pages/Landing/Landing';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}} edges={['left', 'right']}>
          <Landing />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
