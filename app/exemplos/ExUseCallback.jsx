 //importando o useCallback     
 import React, {useCallback, useState} from 'react';
 import { Text, View } from 'react-native';
 import { styles } from '../style/style';
 //importando componentes filhas
 import ComCallback from './ComCallback';
 import SemCallback from './SemCallback';
 
 export default function ExUseCallback(){
    const[state1,setState1] = useState(0);
    const[state2,setState2] = useState(0);
    /**
     * mudaValor1 é uma função que está usando o callback, onde,
     * se o estado valor1 permanecer inalterado a re-renderização 
     * dele não irá ocorrer. No caso do exemplo a função será ativada
     * no componente filho ComCallback.jsx
     */
    const mudaState1 = useCallback(()=> {
        setState1(state1+1)
    },[state1]);
    /**
    * já essa função não possui o callback então quando passarmos
    * a  função para filha, e houver uma re-redenrização
    * ela é obrigada a renderizar novamente o componente filho SemCallback.jsx. 
    */
    const mudaState2 = () => {
        setState2(state2+2)
    }
     
    return(
        <View style={styles.container}>
            <Text style={styles.subtitleDark}>Usando o Callback</Text>
            {/**no componente ComCallback estamos passando valor1 e a função mudavalor1  */}
            <ComCallback valor={state1} setValor={mudaState1}/>
            {/**no componente SemCallback estamos passando valor2 e a função mudavalor2  */}
            <SemCallback valor={state2} setValor={mudaState2}/>
        </View>
    )
 }