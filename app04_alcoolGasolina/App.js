import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { styles } from './styles';

class App extends Component{
  constructor(props){
    super(props);
    this.state  = {
      alcool: null,
      gasolina: null,
      escolha: null,
    };
    this.vantagem = this.vantagem.bind(this);
  }

  vantagem(escolha){
    var alcool = this.state.alcool;
    var gasolina = this.state.gasolina;


    var resultado = alcool / gasolina;

    if ( resultado < 0.7 ){
      this.setState({escolha: 'Abasteça com alcool'});
    }
    else {
      this.setState({escolha: 'Abasteça com gasolina'});
    }
  }
 
  render(){

    let img = 'http://blog.sbrio.com.br/wp-content/uploads/2017/08/Etanol-ou-gasolina.png';
    return(
      <View style = { styles.container }>
        <Text style = { styles.title }>
          Alcool ou Gasolina
        </Text>
        <Image
          source = {{ uri: img }}
          style = {styles.img }
        />
        <TextInput
          style={ styles.input }
          placeholder = 'Digite o preço da gasolina'
          placeholderTextColor = '#aaa'
          onChanceText = {( texto ) => this.setState ({ gasolina: texto })}
        />
        <TextInput
          style={ styles.input }
          placeholder = 'Digite o preço do alcool'
          placeholderTextColor = '#aaa'
          onChanceText = {( texto ) => this.setState ({ alcool: texto })}
        />

        <Pressable
          style = { styles.btn }
          onPress = { () => this.vantagem() }
        >
          <Text style = { styles.textoBtn }>Verificar</Text>
        </Pressable>

        <Text style = { styles.resultado }>{ this.state.escolha }</Text>

      </View>

    )
  }


}


export default App;