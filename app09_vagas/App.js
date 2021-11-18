import React, { Component } from 'react';
import { View, FlatList, Text, } from 'react-native';
import Vaga from './src/Vaga';
import {styles} from './styles'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: 1, title: 'Desenvolvedor Backend', salario: 3000.00, desc: 'Trabalhar em times multidisciplinares (Product Owner, UX, Marketing e SysAdmin) com mindset ágil, desenvolvendo soluções que encantem nossos clientes;', contato: 'vagas@desenvolvedor.com'},
        {id: 2, title: 'Engenheiro de Dados', salario: 3000.00, desc: 'Você precisa conhecer e ter trabalhado com: Tecnologias Big Data: Hadoop, Hive, Hbase, Cassandra (Desejável), Spark, Flume (Desejável), Kafka; Linguagem de programação Java; PL/SQL em bancos de dados Oracle, Sql Server, DB2;', contato: 'vagas@engenheiro.com'},
        {id: 3, title: 'Desenvolvedor Frontend', salario: 3000.00,  desc: 'Conhecimento com desenvolvimento frontend utilizando Angular Conhecimento de analytics, APIs e automação de testes Formação completa na área de TI', contato: 'vagas@desenvolvedor.com'},
        {id: 4, title: 'Programador Java', salario: 3000.00, desc: 'Desenvolver soluções no ambiente definido utilizando as metodologias e técnicas previamente estabelecidas; Gerar versão do sistema contendo os chamados desenvolvidos, testados e aprovados no ambiente solicitado pelo Gerente de Projetos;', contato: 'vagas@desenvolvedor.com'},
        {id: 5, title: 'Estagio em TI', salario: 1000.00, desc: 'Cursando penúltimo ano em TI (todas as modalidades) no período noturno, formação prevista para 06/2023 a 12/2023; Conhecimento intermediário/avançado em Inglês (diferencial)', contato: 'vagas@estagio.com'},
        {id: 6, title: 'Analista de Projetos de TI', salario: 3000.00, desc: 'Buscamos uma pessoa para integrar nosso time de infraestrutura interna de tecnologia, garantindo atendimento aos chamados internos do escritório, aplicando requisitos de compliance (PCI-DSS): controle de acessos, atualização de S.O. dos computadores Windows.', contato: 'vagas@estagio.com'},
      ]
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={styles.title}>Vagas</Text>

        <FlatList
          data = {this.state.feed}
          KeyExtractor = {(item) => item.id }
          renderItem = { ({item}) => <Vaga data = {item}/>}
        />
      </View>
    )
  }
}

export default App ;