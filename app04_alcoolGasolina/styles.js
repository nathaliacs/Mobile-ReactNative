import { StyleSheet }  from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        // backgroundColor: '#e0464e',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 28,
        margin: 30,
        // color: '#fff',
    },

    img:{
        width: 100,
        height: 100,
    },
    input:{
        height: 65,
        borderWidth: 2,
        borderColor: '#e0464e',
        borderRadius: 3,
        margin: 10,
        fontSize: 20,
        padding: 20,
        marginVertical: 12,
    }, 
    btn:{
        marginHorizontal: 10, 
        marginVertical: 5   
    }, 
    textoBtn:{
        marginVertical:40,
        backgroundColor: '#e0464e',
        fontSize: 25, 
        textAlign: 'center',
        padding: 15, 
        color: '#fff',
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#bf3e45',
    },
    resultado:{
        paddingHorizontal:10,
        fontSize: 22,
        fontWeight: 'bold', 
        textAlign: 'center',
    }

})

export { styles };