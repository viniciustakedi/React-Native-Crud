import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function App() {
    useEffect(() => {
        buscarGeneros();
    }, [])

    const [generos, setGeneros] = useState([]);
    function buscarGeneros() {
        const url = "http://localhost:5000/api/Generos";
        fetch(url, {
            method: "GET"
        })
            .then(response => response.json())
            .then(dados => {
                setGeneros(dados);
                console.log(dados);
            })

    }
    return (
        <View style={styles.container}>
            <Text>Lista de Gêneros</Text>
            {
                generos.map((item: any) => {
                    return (
                        <Text key={item.id}>{item.nome}</Text>
                    )
                })
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6D6D6',
        alignItems: 'center',
        justifyContent: 'center',
    },
});