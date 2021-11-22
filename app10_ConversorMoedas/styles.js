import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'red',
        textAlign: 'center',
        marginTop: 15
    },
    moeda: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'red',
        textAlign: 'center',
        marginBottom: 15
    },
    textInputConverter: {
        borderColor: '#ccc',
        borderWidth: 1,
        marginHorizontal: 20, 
        borderRadius:2,
        paddingHorizontal: 20
    },
    btn:{
        marginHorizontal: 20, 
        marginVertical: 4   
    },
    textBtn:{
        marginVertical:30,
        backgroundColor: '#1cb2b1a3',
        fontSize: 20, 
        textAlign: 'center',
        padding: 12, 
        color: '#fff',
        borderRadius: 3,
        borderWidth: 3,
        
        borderColor: '#1cb2b1',
    },
    resultado:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    resultConversao:{
        fontSize: 20,
        margin: 20,

    }
})


export { styles };