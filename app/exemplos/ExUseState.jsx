/*  
    a declaração do useState é feita juntamente com o React, porém, 
    entre { os hooks são declarados aqui }
*/
import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';
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
        //usando função anonima com setCount para zerar o estado count
            ()=>setCount(0)  
        }
        title='zerar' />
    </View>
  );
}

