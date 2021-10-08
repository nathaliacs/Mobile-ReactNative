import React, { Component } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from './styles';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: null,
      num2: null,
      total: null,
    }
    this.multiplicador = this.multiplicador.bind(this);
  }

  multiplicador(){
    if ( this.state.num1 != null && this.state.num2 != null){
      this.setState({
        total: this.state.num1 * this.state.num2,
      })
    }
    else{
      alert('Todos os campos devem ser preenchidos')
      return;
    }
  }


  render(){
    return(
      <View style = { styles.container }>
        <Text style = { styles.title }>
          Multiplicador de numeros
        </Text>
        <TextInput
          style = { styles.input }
          placeholder = 'Digite o primeiro nº'
          onChangeText = {( n1 ) => this.setState ({ num1: n1 })}
        />

        <TextInput
          style = { styles.input }
          placeholder = 'Digite o segundo nº'
          onChangeText = {( n2 ) => this.setState ({ num2: n2 })} 
        />

        <Pressable style = { styles.btn } onPress={ () => this.multiplicador() }>
          <Text style = { styles.textoBtn }>Calcular</Text>
        </Pressable>

        <Text style = { styles.result}>
          Resultado: { this.state.total }
        </Text>

      </View>
    )
  }
}

export default App;