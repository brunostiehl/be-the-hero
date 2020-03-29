import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello OmniStack</Text>
    </View>
  );
}

/**
 * Diferenças do React Native para o ReactJS
 * 
 * Elementos do HTML: não existe semântica no React Native, por isso, não se utiliza as tags convencionais do HTML.
 * Utiliza-se a tag <View> para containers e <Text> para qualquer tipo de texto.
 * 
 * Estilização: ocorre através da propriedade "style" que receberá um objeto contendo a estilização.
 * Exemplo: <Text style={styles.title}>
 * 
 * Flexbox: Por padrão, no React Native, todos os elementos são display flex. Não existem outras formas de display.
 * 
 * Propriedades CSS: São separadas por CamelCase.
 * Exemplo: { alignItems: 'center' }
 * 
 * Heranças de estilo: Não existem heranças de estilo no React Native. O estilo deve ser aplicado diretamente no elemento.
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
  }
});
