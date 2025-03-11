import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles"

export default function Detalhes() {
    return(
        <View style={styles.container}>
        <Text style={styles.title2}> Detalhes </Text>
        <Text style={styles.sempersistencia}> Sem persistência: Nenhum texto salvo </Text>
        <Text style={styles.persistencia}> Texto persistido: Nenhum texto salvo </Text>
        </View>
    
    );
}
