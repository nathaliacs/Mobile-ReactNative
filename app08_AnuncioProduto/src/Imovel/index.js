import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';

class Imovel extends Component {
    render() {
        let img = this.props.data.img;
        
        return (
            <View style={styles.container}>
                    <Image source={{uri: img }}
                        style={styles.img}
                    />
                    <Text style={styles.endereco}>{this.props.data.local}</Text>
                    <Text style={styles.text}>{this.props.data.tipo}</Text>
                    <Text style={styles.titleProduto}>{this.props.data.produto}</Text>
                    <Text style={styles.text}>{this.props.data.anunciante}</Text>
                    <Text style={styles.valor}>R$ {this.props.data.valor} 
                    </Text>
            </View>
        )
    }
}

 
const styles = StyleSheet.create({
    container:{
        margin:5,
        padding: 5,
        width: 150,
        height: 350,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    text: {
        color: '#000',
    },
    endereco: {
        color: '#000',
        fontSize:12,
    },
    valor: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18,
        paddingTop:20,
        textAlign: 'right'
    },
    img: {
        height: 150,
        width: 136,
    backgroundColor:'#ccc' 
    },
    titleProduto: {
        fontWeight: 'bold',
        fontSize:18,
        color: '#000',
        paddingVertical: 5,

    }
})

export default Imovel;