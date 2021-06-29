 import React from 'react';
 import { Button, Text, View } from 'react-native';
 import { styles } from '../style/style';
 
  export default function SemCallback(props){
     const {valor, setValor} = props;
     console.log("SemCallback");
     return(
         <View style={styles.container}>
             <Text style={styles.subtitleDark}>Sem CallBack</Text>
             <Text>State2: {valor}</Text>
             <Button title='+2 no state 2' onPress={setValor} />
         </View>
     )
 }

 