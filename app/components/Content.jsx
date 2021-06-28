import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ExUseState from '../exemplos/ExUseState';
import ExUseState2 from '../exemplos/ExUseState2';
import { styles } from '../style/style';

export default function Content() {
  return (
      <ScrollView>
        <View style={styles.content}>
            <Text style={styles.titleDark}>Área de Exemplos</Text>
            <ExUseState/>
            <ExUseState2/>
        </View>
      </ScrollView> 
  );
}