import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Quem somos</Text>

            <View style={styles.card}>
                <Text style={styles.textAbout}>
                    Somos apaixonados por tecnologia, inovação e soluções criativas. 
                    Unimos conhecimento, experiência e dedicação para transformar ideias 
                    em projetos reais, com foco em qualidade, eficiência e impacto positivo. 
                    Aqui, cada desafio é uma oportunidade de construir algo melhor.
                </Text>
            </View>

            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar para Home</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 20,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    textAbout: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#555',
    },
    button: {
        backgroundColor: '#0066cc',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
