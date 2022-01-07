import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome from './components/Welcome';
import Intro from './components/Intro';
import Main from './components/Main';
import { Provider, DefaultTheme } from 'react-native-paper';


const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
function Part() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='welcome' options={{ headerShown: false }} component={Welcome} />
          <Stack.Screen name='intro' options={{ headerShown: false }} component={Intro} />
          <Stack.Screen name='main' options={{ headerShown: false }} component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


function App() {
  return (
    <Provider theme={theme}>
      <Part />
    </Provider>
  )
}


export default App;