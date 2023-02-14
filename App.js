import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import DemoApp from './src/demoapp';
import DemoApp from './src/demoPost';
export default function App() {
  return (
    <View style={styles.container}>
      <DemoApp/>
      <Text>chào mày</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
