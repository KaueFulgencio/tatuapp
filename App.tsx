import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import SignIn from './src/pages/SignIn'
import Navigator from './src/components/navbar/navigator'

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text>Projeto React Native!</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <StatusBar style="auto" />
      <SignIn/>
      <Navigator/>
    </View>*/
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});
