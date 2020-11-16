import React from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function Footer() {
    return (
        <View style={styles.footer}>
            <Image
                style={styles.img}
                source={require('../../assets/video-player.png')}
            />

            <Text style={styles.linha}>|</Text>

            <View>
                <Text style={styles.texto}>Company Inc. 8901 Marmora Road</Text>
                <Text style={styles.texto}>Call us now toll free (800) 2345-6789</Text>
                <Text style={styles.texto}>Customer support: support@demolink.org</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6511D',
        height: 100,
    },
    img: {
        width: 60,
        height: 60,
    },
    linha: {
        fontSize: 30,
        margin: 10,
        color: '#FFFFFF'
    },
    texto: {
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
    },

});