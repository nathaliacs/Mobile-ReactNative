import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Pressable} from 'react-native';
import { styles } from './styles';

import {Picker} from '@react-native-picker/picker';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: 0,
            moeda1: 'Selecione',
            moedas1: ['Selecione', 'Dolar', 'Real', 'Euro'],
            moedas2: ['Selecione', 'Dolar', 'Real', 'Euro'],
            moeda2: 'Selecione',
            result:'',
        }
        this.converter = this.converter.bind(this);
    }
// dolar, real , euro 
    converter(){
        var moeda1 = this.state.moeda1;
        var moeda2 = this.state.moeda2;
        var valorDig = this.state.valor;


        var dolar = 5.46;
        var euro = 6.25;

        if(moeda1 != 'Selecione' && moeda2 != 'Selecione'){
            if (moeda1 == 'Dolar' && moeda2 == 'Dolar' || moeda1 == 'Real' && moeda2 == 'Real' || moeda1 == 'Euro' && moeda2 == 'Euro') {
                this.setState({result: 'Você tem que escolher moedas diferentes'})
            }
            else if (moeda1 == 'Dolar' && moeda2  == 'Real' ){
                this.setState({result: 'R$' + (valorDig*dolar).toFixed(2)})
            }
            else if (moeda1 == 'Dolar' && moeda2  == 'Euro' ){
                this.setState({result: 'R$' + ((dolar/euro )*valorDig).toFixed(2)})
            }
            else if (moeda1 == 'Real' && moeda2  == 'Dolar' ){
                this.setState({result: 'R$' + (valorDig/dolar).toFixed(2)})
            }
            else if (moeda1 == 'Real' && moeda2  == 'Euro' ){
                this.setState({result: 'R$' + (valorDig/euro).toFixed(2)})
            }
            else if (moeda1 == 'Euro' && moeda2  == 'Dolar' ){
                this.setState({result: 'R$' + ((euro/dolar)*valorDig).toFixed(2)})
            }
            else if (moeda1 == 'Euro' && moeda2  == 'Real' ){
                this.setState({result: 'R$' + (valorDig*euro).toFixed(2)})
            }
        } else{ this.setState ({result: 'Escolha uma opção válida'})}
    }

    render() {

        let moedas1Item =this.state.moedas1.map( (chave) => {
            return <Picker.Item key={chave} value={chave} label={chave}/>})
        let moedas2Item =this.state.moedas2.map((chave) => {
            return <Picker.Item key={chave} value={chave} label={chave}/>})
        return(
            <View style={ styles.container }>
                <ScrollView>
                    <Text style = { styles.title }>Conversor de modas</Text>
                    <Text style = { styles.moeda }>Dolar, Real e Euro</Text>
                    <TextInput
                        style = { styles.textInputConverter }
                        keyboardType='numeric'
                        placeholder='digite o valor'
                        onChangeText = {( texto => this.setState({ valor: texto }))}
                    />

                    <Text>De: </Text>
                    <Picker
                        selectedValue = {this.state.moeda1}
                        onvalueChange = { (chave) => this.setState({ moeda1: chave})}
                    >
                        {moedas1Item}
                    </Picker>

                    <Text>Para: </Text>
                    <Picker
                        selectedValue = {this.state.moeda2}
                        onvalueChange = { (chave) => this.setState({ moeda2: chave})}
                    >
                        {moedas2Item}
                    </Picker>

                    <Pressable
                        style = { styles.btn }
                        onPress={ this.converter}>
                        <Text style = { styles.textBtn }>Resultado</Text>
                    </Pressable>
                    <Text style = { styles.resultado}>Resultado</Text>
                    <Text style= {styles.resultConversao}>{this.state.result}</Text>
                </ScrollView>
            </View>
        )
    }
}




export default App;