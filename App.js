import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.título}> App Test </Text>
      <Text style={styles.descricao}> Texto de exemplo 1 </Text>
      <Text style={styles.descricao1}> Texto de exemplo 2 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center'
  },
  título:{
    fontSize: 35,
    color: '#836FFF'
  },
  descricao:{
    fontSize: 20,
    color: '#000000'
  },
  descricao1:{
    fontSize: 20,
    color: '#000000'
  }
});