import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/components/app-container';
import MainScreen from './src/screens/main-screen';
import Navigator from './src/';

export default function App() {
  return (
    <AppContainer>
      <Navigator/>
    </AppContainer>

  );
}

