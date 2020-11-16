import React, { useEffect, useState, } from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, Image, ActivityIndicator, FlatList } from 'react-native';
import Footer from '../../components/Footer/index';
import cors from 'cors';

export default function Filmes() {

    const [filmes, setFilmes] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/Filmes')
            .then((response) => response.json())
            .then((json) => setFilmes(json.filmes))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])


    const buscar = () => {
        const url = "http://localhost:5000/api/Filmes";
        fetch(url, {
            method: "GET"
        })
            .then(response => response.json())
            .then(dados => {
                setFilmes(dados);
                console.log(dados);
            })
            .finally(() => setLoading(false))
    }

    return (
        <View style={styles.alinhamento}>
            <View style={styles.header}>
                <Image
                    style={styles.imgLogo}
                    source={
                        require('../../assets/logo.png')
                    } />
            </View>

            <View style={styles.indicativo}>
                <Text style={styles.title}>Filmes</Text>
                <Image
                    style={styles.imgDisco}
                    source={
                        require('../../assets/cinema.png')
                    } />
            </View>

            <View style={styles.corpo}>
                <Text style={styles.tltCorpo}>Lista de Filmes</Text>

                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={filmes}
                        keyExtractor={({ id }, index) => id}
                        renderItem={(item: any) => (
                            <Text>{item.titulo}</Text>
                        )}
                    />
                )}

            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    alinhamento: {
        paddingTop: 50,
    },
    header: {
        paddingBottom: 75,
        alignItems: 'flex-end',
        marginRight: 20,
    },
    imgLogo: {
        alignItems: 'center',
    },
    indicativo: {
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
    imgDisco: {
        height: 100,
        width: 100,
    },
    corpo: {
        paddingTop: 65,
    },
    tltCorpo: {
        fontSize: 30,
        marginLeft: 10,
    },
    lista: {

    }
});