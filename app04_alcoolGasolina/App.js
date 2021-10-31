import React, { Component } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { styles } from "./styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etanol: '',
      gasolina: '',
      escolha: '',
    }
    this.comparador = this.comparador.bind(this)
  }

  comparador(){
    var etanol = this.state.etanol;
    var gasolina = this.state.gasolina;

    var comparar = (etanol / gasolina).toFixed(2);

    if ( comparar <= 0.7 ){
      this.setState({ escolha: 'A melhor opção é abastecer com alcool, a pontuação é de ' + comparar})
    }
    else if ( comparar > 0.7 ){
      this.setState({ escolha: 'A melhor opção é abastecer com gasolina, a pontuação é de ' + comparar})
    }
  }

  render(){

    let img = 'http://blog.sbrio.com.br/wp-content/uploads/2017/08/Etanol-ou-gasolina.png';
    return(
      <View style = { styles.container }>
      <ScrollView>

        <Text style = { styles.title }>
          Alcool ou Gasolina
        </Text>
        <Image
          source = {{ uri: img }}
          style = {styles.img }
        />
        <TextInput
          style={ styles.input }
          keyboardType='numeric'
          placeholder="Preso do alcool"
          placeholderTextColor = '#aaa'
          onChangeText = {( texto => this.setState({ etanol: texto}))}
        />
        <TextInput
          style={ styles.input }
          keyboardType='numeric'
          placeholder="Preso da gasolina"
          placeholderTextColor = '#aaa'
          onChangeText = {( texto => this.setState({ gasolina: texto}))}
          />

        <Pressable
          style = { styles.btn }
          onPress = { () => this.comparador() }
        >
          <Text style = { styles.textBtn }>Verificar</Text>
        </Pressable>
        <Text style = { styles.classResultado }> Resultado </Text>

        <Text style = { styles.resultado }>{ this.state.escolha }</Text>
        
        </ScrollView>
      </View>

    )
  }


}
export default App;