import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Tela Inicial</Text>
            <Text style={styles.subtext}>
                Selecione uma opção para continuar.
            </Text>

            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Details')}>
                    <Text style={styles.buttonText}>Detalhes</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate('About')}>
                    <Text style={styles.buttonText}>Sobre Nós</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
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
    subtext: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#666',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16, // se estiver usando React Native 0.71+; se não funcionar, use marginRight/marginLeft nos botões
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        width: 140,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
