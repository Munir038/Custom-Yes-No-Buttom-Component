import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import YesNoButton from './components/YesNoButton';
// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [certificate, setCertificate] = React.useState(false);
  const [pt,setPt] = React.useState(false);
  return (
    <SafeAreaView style={{paddingTop:30}}>
      <YesNoButton
      borderTop = {true}
      title = 'Certificate'
      onPressNo = {()=>{
        setCertificate(false)
      }}
      onPressYes = {()=>{
        setCertificate(true)
      }}
      value = {certificate}
      />
      <YesNoButton
      title = 'Eval Pre-Trip'
      onPressNo = {()=>{
        setPt(false)
      }}
      onPressYes = {()=>{
        setPt(true)
      }}
      value = {pt}
      />
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
