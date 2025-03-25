import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Login from'./Screens/Login';



export default function App () {
  return (
    <View style={appestilo.containerapp} >
      <Login/>
    </View>
  );
}

const appestilo = StyleSheet.create({
   containerapp:{
   flex: 1,

}
})



