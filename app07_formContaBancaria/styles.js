import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff'
    },
    title: {
      textAlign: 'center', 
      fontWeight: 'bold',
      fontSize: 25,
      padding: 15,
      color: '#c92a2a'
    },
    input_text: {
      color: '#000',
      fontSize: 18,
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    input: {
      height: 41,
      width: 255,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginHorizontal: 25,
      fontSize: 18,
      paddingHorizontal: 5,
      // marginVertical: 8,
      color: '#000',
    },
    picker: {
      width: 300,
      marginHorizontal: 15,
      borderWidth:1,
      borderColor: '#000', 
      fontSize: 18,
    },
    text_limite: {
      color : '#000',
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 15, 
    },
    btn: {
      marginHorizontal: 50,
      marginBottom:15,
    }, 
    text_btn:{
      fontSize: 20, 
      textAlign: 'center', 
      fontWeight: 'bold',
      padding:10,
      color: '#fff',
      borderRadius: 5,
      backgroundColor: '#7b83eb'
      
    },
    title_result: {
      fontSize: 22,
      padding: 20,
      color: '#7b83eb'
    },
    text_result: {
      color: '#000',
      fontSize: 18,
      paddingHorizontal: 20,
      paddingVertical: 5,

    }
    
})

export {styles};