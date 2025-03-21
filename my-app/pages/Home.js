import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function Home() {
    return(
        <View style={styles.container}>
        <Text style={styles.title}> Persistência e Navegação</Text>
        <TextInput style={styles.input} placeholder="Digite algo..." keyboardType="text"></TextInput>
        <Text style={styles.sempersistencia}> Sem persistência: Nenhum texto salvo </Text>
        <Text style={styles.persistencia}> Texto persistido: Nenhum texto salvo </Text>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salva</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Detalhes</Text>
        </TouchableOpacity>
        </View>
    );
}