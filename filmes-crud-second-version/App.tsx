import React from 'react';
import { DrawerLayoutAndroid, StyleSheet, Text, View } from 'react-native';
import Filmes from './pages/Filmes/index';
import Generos from './pages/Generos/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { render } from 'react-dom';

export default function App() {
  const Drawer = createDrawerNavigator();

    return (
      <View>
        <Filmes/>
      </View>
    )
  }

const styles = StyleSheet.create({
});
