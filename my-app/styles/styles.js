import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        display: 'flex',
        alignItems: 'center',
        top: 150,
        maxWidth: 180,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1, 
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 20, 
        backgroundColor: 'white', 
        top: 180,
        width: '80%',
    },
    sempersistencia: {
        color: 'red',
        fontSize: 20,
        top: 200,
    },
    persistencia: {
        color: 'green',
        fontSize: 20,
        top: 215,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        borderRadius: 10, 
        width: '80%', 
        alignItems: 'center',
        marginTop: 20,
        top: 220,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold', 
    },
    title2: {
        fontSize: 30,
        display: 'flex',
        alignItems: 'center',
        top: 150,
        maxWidth: 180,
        textAlign: 'center',
        textDecoration: 'underline',
    },
});

export default styles;