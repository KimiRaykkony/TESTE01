import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from './src/style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELLO!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
