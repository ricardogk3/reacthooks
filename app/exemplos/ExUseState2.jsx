import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from '../style/style';

export default function ExUseState2() {
  /**
   * Estado no formato de Objeto com chave e valor
   */  
  const [state, setState] = useState({
      nome:"TV 32 CCE",
      preco: "3000"
    });

    

    return (
    <View style={styles.container}>
      <Text style={styles.subtitleDark}>Exemplo useState 2</Text>
      
      <Text>{`\nValor de nome: ${state.nome}`}</Text>
      {/** 
       * A função onChangeText irá alterar o state apenas a  chave nome, 
       * mantendo intacto qualquer outra chave contida no objeto, por conta do
       * ...state 
       * 
       * ...state impede que os dados que não serão 
       *  alterados se perca, nesse caso o preco 
       * */}
      <TextInput 
        style={styles.input}
        placeholder='Nome'
        defaultValue={state.nome}
        onChangeText={
          (value) => setState({...state, nome:value })
        }
      />
      
      <Text>{`\nValor de preco: ${state.preco}`}</Text>
       {/** 
       * A função onChangeText irá alterar o state apenas a  chave preco, 
       * mantendo intacto qualquer outra chave contida no objeto, por conta do
       * ...state 
       * 
       *  ...state impede que os dados que não serão 
       *  alterados se perca, nesse caso o nome 
      */}
      <TextInput 
        style={styles.input}
        placeholder='Preco'
        defaultValue={state.preco}
        onChangeText={
          (value) => setState({...state, preco:value })
        }
      />

      <Button 
        onPress={
            ()=>setState({
              nome: "",
              preco: ""
            })  //usando função anonima com setState para limpar o estado state
        }
        title='Limpar' />
    </View>
  );
}