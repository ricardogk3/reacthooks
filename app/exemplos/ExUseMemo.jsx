import React, {useState, useMemo} from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../style/style';

 export default function ExUseMemo(){
    const[cadastro, setCadastro] = useState({
        nome: '',
        email: '',
        senha1: '', 
        senha2: ''
    });

    //função para realizar mudança automática no estado
    const handleInputChange = (name, value) =>{
        setCadastro({
            ...cadastro, [name]: value
        })
    }

    function SenhaMinima({senha}){
        console.log('SenhaMinima')
        if(senha === '')
            return ""
        else if(senha.length <= 5)
            return "senha com no mínimo 6 caracteres"
        return "Senha válida"
    }

    const senha = useMemo(()=>
        <SenhaMinima senha={cadastro.senha1} />, [cadastro.senha1]
    )

    function ComparaSenha({senha1, senha2}){
        console.log('ComparaSenha')
        if(senha2 === '')
            return ''
        else if(senha1 === senha2)
            return 'senhas conferem'
        return 'senhas inválidas'
    }

    const compara = useMemo(()=>
        <ComparaSenha senha1={cadastro.senha1} senha2={cadastro.senha2} />,
        [cadastro.senha1, cadastro.senha2]
    )
    return(
        <View style={styles.container}>
            <Text style={styles.subtitleDark}>Exemplo UseMemo</Text>
            {/*usado apenas para testar o state cadastro

            <Text>{cadastro.nome}</Text>
            <Text>{cadastro.email}</Text>
            <Text>{cadastro.senha1}</Text>
            <Text>{cadastro.senha2}</Text>

            */}
            <TextInput
                style={styles.input}
                placeholder='Nome'
                defaultValue={cadastro.nome}
                onChangeText={
                    (value)=>handleInputChange('nome', value)
                }
            />
            <TextInput
                style={styles.input}
                placeholder='email'
                textContentType='emailAddress'
                defaultValue={cadastro.email}
                onChangeText={
                    (value)=>handleInputChange('email', value)
                }
            />
            <TextInput
                style={styles.input}
                placeholder='Digite sua senha'
                textContentType='password'
                secureTextEntry={true}
                maxLength={20}
                defaultValue={cadastro.senha1}
                onChangeText={
                    (value)=>handleInputChange('senha1', value)
                }
            />
            <Text>{senha}</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite novamente sua senha'
                textContentType='password'
                secureTextEntry={true}
                maxLength={20}
                defaultValue={cadastro.senha2}
                onChangeText={
                    (value)=>handleInputChange('senha2', value)
                }
            />
            <Text>{compara}</Text>
        </View>
    )
}

