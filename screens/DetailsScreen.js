import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Detalhes sobre nós</Text>

            <View style={styles.card}>
                <Text style={styles.textDetails}>
                    Atuamos com foco em inovação, qualidade e atendimento personalizado. 
                    Nossa empresa oferece soluções sob medida para diferentes setores, sempre 
                    priorizando a excelência nos serviços e a satisfação dos nossos clientes. 
                    Com uma equipe comprometida e capacitada, buscamos constantemente aprimorar 
                    nossos processos e entregar resultados consistentes e confiáveis.
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
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    textDetails: {
        fontSize: 16,
        color: '#555',
        textAlign: 'justify',
    },
    button: {
        backgroundColor: '#007bff',
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
