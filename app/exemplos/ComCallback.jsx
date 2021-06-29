//import o memo
 import React, {memo} from 'react';
 import { Button, Text, View } from 'react-native';
 import { styles } from '../style/style';
 
 
 
  function ComCallback(props){
     const {valor, setValor} = props;
     console.log("ComCallBack");
     return(
         <View style={styles.container}>
             <Text style={styles.subtitleDark}>Com CallBack</Text>
             <Text>State1: {valor}</Text>
             <Button title='+1 no state 1' onPress={setValor} />
         </View>
     )
 }

/**
 * o memo serve aqui para memorizar o componente e impedir que seja
 * acionado sem necessidade
*/
 export default memo(ComCallback);