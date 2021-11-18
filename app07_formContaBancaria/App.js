import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Switch, StyleSheet, Pressable} from 'react-native';
import { styles } from "./styles";
// import Pessoa from './src/Pessoa'

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _nome: '', 
      _idade: '',
      _sexo: '',
      _escolaridade: '',
      _limite: null,
      _nasc: '',
      nome: null,
      idade: null,
      sexo: 'Selecione',
      sexos: ['Selecione','Feminino' ,'Masculino'],
      escolaridade: 'Selecione',
      grauEscolaridade: [ 
        'Selecione', 'Ensino fundamental incompleto', 
        'Fundamental completo', 'Ensino médio incompleto', 
        'Ensino médio completo', 'Ensino Superior incompleto', 
        'Pós-graduação', 'Mestrado', 'Doutorado', 'Pós-doutorado'
      ],
      limite: 0,
      brasileiro: false,
      msg: '',
    }
    this.validar = this.validar.bind(this);
  }

  validar(){
    var nome = this.state.nome;
    var idade = this.state.idade;
    var sexo = this.state.sexo;
    var escolaridade = this.state.escolaridade;
    var limite = this.state.limite.toFixed(2);
    var brasileiro = this.state.brasileiro ? 'Sim' : 'Não';

    if (
      nome != null && idade != '' && sexo != 'Selecione' && escolaridade != 'Selecione' && limite > 0 ){
        this.setState({
          msg: 'Dados Informados',
          _nome: 'Nome: ' + nome,
          _idade: 'Idade: ' + idade,
          _sexo: 'Sexo: ' + sexo,
          _escolaridade: 'Escolaridade: ' + escolaridade,
          _limite: 'Limite: ' + limite,
          _nasc: 'Brasileiro: ' + brasileiro,
    
        })
      }
      else {
        this.setState({ msg: 'Por favor, preencha todos os campos'})
        
    }
  }

  render() {

    let sexoItem = this.state.sexos.map( (chave ) => {
      return <Picker.Item key={chave} value={chave} label={chave}/>
    })
    let escolaridadeItem = this.state.grauEscolaridade.map( ( chave ) => {
      return <Picker.Item key={chave} value={chave} label={chave}/>
    })

    return(
      <View style={styles.container }>
        <ScrollView>
          <Text style = { styles.title }>Abertura de conta</Text>

          <Text style = { styles.input_text }>Nome: </Text>
          <TextInput 
            style = { styles.input}
            placeholderTextColor = '#aaa'
            onChangeText = {( texto => this.setState({nome: texto}))}
          />

          <Text style = { styles.input_text }>Idade: </Text>
          <TextInput 
            style = { styles.input}
            placeholderTextColor = '#aaa'
            
            keyboardType= 'numeric'
            onChangeText = {( texto => this.setState({idade: texto}))}
          />

          <Text style = { styles.input_text }>Sexo:</Text>
          <Picker
            style = { styles.picker }
            selectedValue={this.state.sexo}
            onValueChange={ ( chave ) => this.setState({sexo: chave})}
          >
            {sexoItem}
          </Picker>
          <Text style = { styles.input_text }>Escolaridade:</Text>
          <Picker
            style = { styles.picker }
            selectedValue={this.state.escolaridade}
            onValueChange={ ( chave ) => this.setState({escolaridade: chave})}
          >
            {escolaridadeItem}
          </Picker>

          <Text style = { styles.input_text }>Limite:</Text>
          <Slider
            minimumValue= { 0 }
            maximumValue= { 500 }
            maximumTrackTintColor='#a7a7a7'
            onValueChange={ ( limiteSelecionado ) => this.setState({ limite: limiteSelecionado})}
            value={ this.state.limite }
          />
          <Text style = {styles.text_limite}> { this.state.limite.toFixed(2) }</Text>

          <Text style = { styles.input_text }>Brasileiro: { this.state.brasileiro ? 'sim' : 'não'}</Text>
          <Switch
            value={ this.state.brasileiro }
            onValueChange={ ( valorSwitch ) => this.setState({ brasileiro: valorSwitch})}
          />

          <Pressable 
            style={ styles.btn } 
            onPress={ this.validar}>
            <Text style = { styles.text_btn}>Confirmar</Text>
          </Pressable>

          <Text style = { styles.title_result}> { this.state.msg }</Text>
          <Text style = { styles.text_result}> { this.state._nome }</Text>
          <Text style = { styles.text_result}> { this.state._idade }</Text>
          <Text style = { styles.text_result}> { this.state._sexo }</Text>
          <Text style = { styles.text_result}> { this.state._escolaridade }</Text>
          <Text style = { styles.text_result}> { this.state._limite}</Text>
          <Text style = { styles.text_result}> { this.state._nasc }</Text>


        </ScrollView>
      </View>
    )
  }
}
  


export default App;


