import React from 'react';
import { DrawerLayoutAndroid, StyleSheet, Text, View } from 'react-native';
import Filmes from './pages/Filmes/index';

export default function App() {
  return (
    <View>
      {/* <NavigationContainer>
        <Drawer.Navigator>

        </Drawer.Navigator>
      </NavigationContainer> */}
      <Filmes/>
    </View>
  );
}

const styles = StyleSheet.create({
});