import React, { Component } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView} from "react-native";
import { styles } from "./styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      resultado: '',
    }
    this.imc = this.imc.bind(this);
  }

  imc(){
    var altura = this.state.altura;
    var peso = this.state.peso;
    var imc = (peso / Math.pow(altura, 2)).toFixed(2);

    if ( imc < 18.5 ) {
      this.setState({ resultado: 'Você está abaixo do peso. Seu IMC é de ' + imc });
    }
    if ( imc >= 18.5 & imc <= 24.9 ) {
      this.setState({ resultado: 'Você está com o peso normal. Seu IMC é de ' + imc});
    }
    if ( imc >= 25 & imc <= 29.9 ) {
      this.setState({ resultado: 'Você está com sobrepeso. Seu IMC é de ' + imc})
    }
    if ( imc >= 30 & imc <= 34.9 ) {
      this.setState({ resultado: 'Você está com obesidade grau I. Seu IMC é de ' + imc})
    }
    if ( imc >= 35 & imc <= 39.9 ) {
      this.setState({ resultado: 'Você está com obesidade grau II. Seu IMC é de ' + imc})
    }
    else if ( imc >= 40 ) {
      this.setState({ resultado: 'Você está com obesidade grau III ou mórbida. Seu IMC é de ' + imc})
    }
  }

  render(){
    let img = 'data:image/png;base64,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';
    return(
      <View style = { styles.container }>
        <ScrollView>
          <Text style = { styles.title}>
            Cálculo do IMC
          </Text>

          <Image 
            source = {{ uri: img }}
            style = { styles.img}  
            // style={{ width: 100, height: 100 }}

          />


          <TextInput
            style = { styles.input }
            placeholder = 'Peso'
            placeholderTextColor = '#aaa'
            keyboardType="numeric"
            onChangeText = {( texto  => this.setState({ peso: texto }))}
          />

          <TextInput
            style = { styles.input }
            placeholder = 'Altura'
            placeholderTextColor = '#aaa'
            keyboardType="numeric"
            onChangeText = {( texto  => this.setState({ altura: texto }))}
          />

          <Pressable 
            style = { styles.btn } 
            onPress={ () => this.imc() }
          >
            <Text style = { styles.texteBtn}> Verificar</Text>
          </Pressable>
          <Text style = { styles.classResultado }>Classificação</Text>

          <Text style = { styles.resultado }> { this.state.resultado } </Text>
        </ScrollView>
      </View>
    )
  }


}

export default App;