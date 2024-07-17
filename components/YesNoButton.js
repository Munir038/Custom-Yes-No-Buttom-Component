import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';


export default YesNoButton = (props)=> {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderTopWidth: props.borderTop&&1,
          borderBottomWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 4,
        }}>
        <Text>{props.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginRight: 10,
            backgroundColor: '',
            borderRadius: 4,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: props.value ? '#326fb5' : 'grey',
          }}>
          <View
            style={{
              borderRightWidth: 0,
              paddingHorizontal: 4,
              backgroundColor: props.value == false ? 'grey' : '#fff',
              borderRadius: 3,
            }}>
            <TouchableOpacity onPress={() => props.onPressNo()}>
              <Text style={{ color: !props.value && '#fff' }}>No</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 4,
              backgroundColor: props.value ? '#326fb5' : '#fff',
              borderRadius: 3,
            }}>
            <TouchableOpacity onPress={() => props.onPressYes()}>
              <Text style={{ color: props.value && '#fff' }}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
