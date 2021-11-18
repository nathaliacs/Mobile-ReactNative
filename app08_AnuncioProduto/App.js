import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import Imovel from './src/Imovel';
import {styles} from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, img: 'https://s2.glbimg.com/gXLzpm23ZTViy1dDgtsIX3FL5rc=/620x455/e.glbimg.com/og/ed/f/original/2013/06/03/14_1.jpg', local: 'Ribeirão Preto-SP', tipo: 'Aluguel', produto: 'Casa Reformada com 1 quarto', anunciante: 'Imobiliaria Local', valor: 1500},
        {id: 2, img: 'https://www.decorfacil.com/wp-content/uploads/2015/11/20161114fachada-casa-simples-pequena-77.jpg', local: 'Santos-SP', tipo: 'Venda', produto: 'Casa com 3 dormitorios e garagem', anunciante: 'Imobiliaria Lopes', valor: 450000},
        {id: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY5jky8gNX1ORHZcpi8g3nGWot1czSJ0AtQ&usqp=CAU', local: 'Guarujá-SP', tipo: 'Aluguel', produto: 'Casa com 3 quartos com piscina', anunciante: 'Guaru Imóveis', valor: 3200},
        {id: 4, img: 'https://www.kaza.net.br/wp-content/uploads/2019/10/davi1.jpg', local: 'São Sebastião-SP', tipo: 'Diária', produto: 'Suite de casal com vista para o mar', anunciante: 'Pousada LaPalma', valor: 380,},
        {id: 5, img: 'https://i.pinimg.com/originals/5e/75/97/5e75974e4a190a85b710f90bf7bf1cc1.jpg', local: 'Caraguatatuba-SP', tipo: 'Aluguel', produto: 'Casa de veraneio com 3 dormitórios', anunciante: 'Roberto Rocha', valor: 2000},
        // {id: 6, img: 'images', local: '', tipo: '', produto: '', anunciante: '', valor: '',},
        // {id: 7, img: 'images', local: '', tipo: '', produto: '', anunciante: '', valor: '',},
        // {id: 8, img: 'images', local: '', tipo: '', produto: '', anunciante: '', valor: '',},
        // {id: 9, img: 'images', local: '', tipo: '', produto: '', anunciante: '', valor: '',},
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Anúncios</Text>

          <FlatList
            style = {styles.flatList}
            horizontal
            data={this.state.feed}
            keyExtractor={(item) => item.id}
            renderItem= { ({item}) => <Imovel data={item}/>}
          />
      </View>
    )
  }


}

export default App;