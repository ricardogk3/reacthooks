/**Realizando o import do useContext para consumir as informações 
 * que lhe foram permitidas  */
import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import { styles } from '../style/style';
/**Para consumir os dados que o Provider liberou,
 * devemos importar o MeuContexto para dentro do componente.
 * Detalhe, se um componente importar o contexto 
 * não tendo permissão de acesso, ele não pode recuperar os dados.
 * Pois ele não está na lista de convidados do Provider =D  */
import {MeuContexto} from './ExCriandoContexto';

export default function ExUseContext(){
    /**Aqui estamos extraindo os dados do objeto (destruction), 
     * e permitindo o uso dos dados, através do useContext chamando
     * o MeuContexto
     */
    const {dados} = useContext(MeuContexto);
    
    return(
        <View style={styles.container}>
            <Text style={styles.titleDark}>Usando o Contexto</Text>
            <Text>Dados do Contexto - Nome: {dados.nome}</Text>
            <Text>Dados do Contexto - Valor: {dados.valor}</Text>
        </View>
    )
}