import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff'

    },
    title:{
        backgroundColor: '#1cb2b1',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 25,
        padding: 15,
        color: '#fff'
    },
    img:{
        width: 180, 
        height: 180, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginTop: 30, 
        marginBottom: 35
    },
    text: {
        textAlign: 'center', 
        fontSize:20, 
        color: '#c92a2a'
    },
    input:{
        padding: 8,
        marginVertical: 8,
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 50,
        color: '#c92a2a',
        borderBottomColor: '#c92a2a',
        borderBottomWidth: 2,
    },
    btn:{
        marginHorizontal: 10, 
        marginVertical: 5   

    },
    textBtn:{
        marginVertical:30,
        backgroundColor: '#1cb2b1a3',
        fontSize: 20, 
        textAlign: 'center',
        padding: 12, 
        color: '#000',
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#1cb2b1',

    },
    result:{
        marginHorizontal: 10,
        marginVertical: 20,
        fontSize: 18,
        textAlign: 'center',
    }
})


export { styles };