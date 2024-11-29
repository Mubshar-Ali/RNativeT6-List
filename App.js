import React from 'react';
import { FlatList,ScrollView, Text } from 'react-native';
import details from './Profiledata';
import Main from './Profilestyle';

const App = () => (
<FlatList
  data={details}
  renderItem={({item})=><Main data={item}/>}
  keyExtractor={(item)=>(item.id)}
/>
);

export default App;
