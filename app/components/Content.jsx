import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ExCriandoContexto from '../exemplos/ExCriandoContexto';
import ExUseCallback from '../exemplos/ExUseCallback';
import ExUseEffect from '../exemplos/ExUseEffect';
import ExUseMemo from '../exemplos/ExUseMemo';
import ExUseReducer from '../exemplos/ExUseReducer';
import ExUseState from '../exemplos/ExUseState';
import ExUseState2 from '../exemplos/ExUseState2';
import { styles } from '../style/style';

export default function Content() {
  return (
    <View style={styles.content}>
      <ScrollView>
          <Text style={styles.titleDark}>Área de Exemplos</Text>
          <ExUseMemo/>
          <ExUseCallback/>
          <ExUseReducer/>
          <ExCriandoContexto/>            
          <ExUseEffect/>
          <ExUseState/>
          <ExUseState2/>
      </ScrollView>
    </View>
      
        
      
  );
}