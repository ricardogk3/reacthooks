
 /**importando o useReducer */
 import React, {useReducer} from 'react';
 import { Button, Text, View } from 'react-native';
 import { styles } from '../style/style';
 
 export default function ExUseReducer(){
    /*Nesse exemplo iremos atribuir ao count + 1, -1 ou 0  */
    const valorInicial = 0;
    /**Criamos uma função que será o reducer que irá fazer o tratamento do state
     * baseado na escolha enviada pelo despatch. Quem vai controlar tudo é o switch
     * o return faz o papel de setState nesse momento;
     * caso o dispatch não envie uma opção válida, ele irá zerar o count.  */
    function meuReducer (state, action){
        switch(action){
            case 'add' : return state + 1;
            case 'dec' : return state - 1;
            default: return 0;
        }
    }
    /**Exemplo de montagem do useReducer, onde ele recebe 2 parâmetros
     * o primeiro é o reducer que irá fazer o tratamento de dados,
     * o outro, o valor que irá iniciar o state. */
    const[state, dispatch] = useReducer(meuReducer, valorInicial);

    return(
        <View style={styles.container}>
            <Text style={styles.titleDark}>Usando o useReducer</Text>
            
            <Text>Valor do state: {state}</Text>
            {/** chamando a função de dispatch que envia a opção escolhida para meuReducer
             * alterando o valor do meu state  */}
            <Button title="add" onPress={()=>dispatch('add')}/>
            <Button title="dec" onPress={()=>dispatch('dec')}/>
            <Button title="clear" onPress={()=>dispatch('clear')}/>
        </View>
    )
 }