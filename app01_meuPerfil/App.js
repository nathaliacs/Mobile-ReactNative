import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';

class App extends Component {
  render() {
    let nome = 'Nathalia Souza';
    let img = 'https://avatars.githubusercontent.com/u/57570714?s=400&u=49a0aca131d9271d4db4494757a2d77e43324977&v=4';

    return(
      <View style={{ background: '#ff0000'}}>
        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', margin: 20 }}>Meu perfil</Text>
        <Image 
          source={{ uri: img }}
          style={{ width: '100%', height: '50%' }}
        />
        <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginVertical: 15 }}>Dados Pessoais</Text>
        <Text style={{ fontSize: 18, marginHorizontal: 15, marginBottom: 10 }}>{ nome }</Text>
        <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginVertical: 5 }}>Formação</Text>
        <Text style={{ fontSize: 18, marginHorizontal: 15, marginBottom: 10 }}>Estudante do curso de Sistema para Internet na Faculdade de Tecnología de São Paulo (FATEC)</Text> 
        <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginVertical: 5 }}>Projeto</Text>
        <Text 
          style={{ fontSize: 18, marginHorizontal: 15, marginBottom: 10, fontWeight: 'bold', color: 'blue'}}
          onPress={() => { 
          Linking.openURL('https://github.com/nathaliacs?tab=repositories'); 
        }}> 
          Acesse meu repositorio no GitHub
        </Text>
      </View>
    )
  }
}



export default App;