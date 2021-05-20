import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import Navigation from './Navigation';

import HomeScreen from '@screens/Home';

function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}

export default App;
