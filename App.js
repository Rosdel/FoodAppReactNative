import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { loadAsync } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'

Icon.loadFont();

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component = {Home} options={{headerShown: false}} />
      </Stack.Navigator> 
    </NavigationContainer> 
  );
}


