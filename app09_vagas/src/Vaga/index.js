import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { styles } from './styles';

class Vaga extends Component {

    render() {
        return(
            <View style={ styles.container }>
                <Text style={ styles.title }> { this.props.data.title } </Text>
                <Text style={ styles.text }> Salário: R$ { this.props.data.salario } </Text>
                <Text style={ styles.text }> Descrição: { this.props.data.desc } </Text>
                <Text style={ styles.text }> Contato: { this.props.data.contato } </Text>

            </View>
        )
    }
}

export default Vaga;