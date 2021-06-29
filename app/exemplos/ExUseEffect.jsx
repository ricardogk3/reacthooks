import React, {useState, useEffect} from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../style/style';

export default function ExUseEffect(){
    const[count, setCount] = useState(1);
    const[verifica, setVerifica] = useState('Renderizou me chamou!');
 
    /*
        A cada alteração realizada na renderização o useEffect é ativado.
        Usamos ela dentro do componente para poder acessar as props ou states contidos nela.
        Porém, devemos tomar cuidado ao implementar o useEffect, quando se tem um estado que está 
        sendo alterado dentro dele.
        Exemplo, o count, ele por estar dentro do useEffect, caso ocorra alteração,
        irá gerar um loop infinito.
        Para corrigir isso, você deve referenciar ele dessa forma [count] ao final de
        cada useEffect, assim ele só irá executar novamente se count sofrer alteração.
    */

    useEffect(
        ()=>{
            /* 
                setVerifica terá alteração de seu estado mostrando a quantidade de
                vezes que foi renderizado.
            */
            setVerifica(`Ja renderizei ${count} vezes`)
        }, [count]
    )

    return(
        <View style={styles.container}>
            <Text style={styles.subtitleDark}>Exemplo useEffect</Text>

            <Text>{verifica}</Text>
            <Button 
                title="Aperte Aqui" 
                onPress={
                    ()=>setCount(count+1)
                }
            />
        </View>
    )
}