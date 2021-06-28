import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { styles } from '../style/style';

export default function ExUseState() {
    //state contador para incrementar ou decrementar
    const [count, setCount] = useState(0);
    
    //função para +1 no estado count, usando setCount
    const addUm = () => {
        setCount(count+1)
    }
    //função para -1 no estado count, usando setCount
    const remUm = ()  => {
        setCount(count-1)
    }
    return (
    <View style={styles.container}>
      <Text style={styles.subtitleDark}>Exemplo useState</Text>
      
      <Button 
        onPress={
            remUm
        }
        title='-1' 
      />
      
      <Text>{`\nValor de count: ${count}\n`}</Text>
      
      <Button 
        onPress={addUm}
        title='+1' />
      
      <Button 
        onPress={
            ()=>setCount(0)  //usando função anonima com setCount para zerar o estado count
        }
        title='zerar' />
    </View>
  );
}