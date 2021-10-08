import React, { Component } from 'react';
import { View, Text, Pressable, Button, Alert } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cont: 0,
    };
    this.contadorPessoas = this.contPessoas.bind(this)
  }


  contPessoas(texto) {
    if ( texto == 'add'){
      this.setState({ 
        cont: this.state.cont + 1,
      });
    }
    else if ( texto == 'remove' && this.state.cont > 0) {
      this.setState({ 
        cont: this.state.cont - 1,
      })
    }
    else{
      alert('Não há pessoas cadastradas')
      return;
}
  }

  render(){
    return (
      <View style={ styles.container }>
        
        <Text style={ styles.title }>
          Contador de Pessoas
        </Text>
        <Text style={ styles.number}>{ this.state.cont }</Text>


        <Pressable style={ styles.btn } onPress={ () => this.contPessoas('add') }>
          <Text style={styles.add }> + </Text>
        </Pressable>

        <Pressable style={ styles.btn } onPress={ () => this.contPessoas('remove') }> 
          <Text style={ styles.remove } > - </Text>
        </Pressable>


        
      </View>
    )
  }

}

export default App;