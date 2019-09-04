import * as React from 'react';
import { View } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MyComponent extends React.Component {
  state = {
    text: '',
  }

  render() {
    return (
      <View>
        <Appbar.Header>
          <Icon style={{paddingLeft: 10}} name="menu" size={25} onPress={()=> this.props.navigation.openDrawer()} />
          <Appbar.Content title="Kimatmilao" />
        </Appbar.Header>
        </View>
    );
  }
}
