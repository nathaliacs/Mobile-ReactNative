import React, { Component } from 'react'
import { View, Text, TextInput, Pressable, Image, ScrollView } from 'react-native'
import { styles } from './styles'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: '',
      result: '',
    }
    this.charada = this.charada.bind(this)
  }

  charada() {
    var num = this.state.num;

    var num2 = Math.floor(Math.random()*10)
    if (num == num2 ){
      this.setState({ result: 'Parabens, você acertou o número' })
    }
    else {
      this.setState({ result: 'Não foi dessa vez, O número certo era o '+ num2})
    }

  }

  render(){

    let img = 'https://static.escolakids.uol.com.br/2020/10/ponto-interrogacao.jpg'

    return (

      <View style = { styles.container }>
        <ScrollView>
          <Text style = { styles.title }>
            Jogo do número aleatório
          </Text>

          <Image source= {{ uri: img }} style = { styles.img } />

          <Text style = { styles.text }>Pense em um nº de 0 a 10 </Text>

          <TextInput
            style = { styles.input }
            placeholder= 'Insira seu número'
            placeholderTextColor= '#aaa'
            keyboardType="numeric"
            onChangeText = {( texto  => this.setState({num: texto}))}
          />

          <Pressable style={ styles.btn } onPress={ () => this.charada()}>
            <Text style={ styles.textBtn }> Descobrir </Text>
          </Pressable>

          <Text style={ styles.result }>{ this.state.result }</Text>

        </ScrollView>
      </View>
    )
  }

}

export default App;