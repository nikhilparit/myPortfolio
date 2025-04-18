import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#566DFB" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#566DFB',
    fontFamily: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Poppins-Regular', 
  },
});