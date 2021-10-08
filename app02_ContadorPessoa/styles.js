import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        backgroundColor: '#000',
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 25,
        padding: 20,
        color: '#fff'
    },
    number: {
        fontSize:  90, 
        textAlign: 'center',
        paddingVertical: 80,
    },
    btn: {
        marginHorizontal: 20, 
        marginVertical: 5   
    },
    add: {
        backgroundColor: '#98c66c',
        fontSize: 45, 
        textAlign: 'center',
        fontWeight: 'bold',
        // padding: 5, 
        color: '#002c00',


    },
    remove: {
        backgroundColor: '#ff8888',
        fontSize: 45, 
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#5f0000',

    }
})

export { styles };