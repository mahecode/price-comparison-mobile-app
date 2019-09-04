import * as React from 'react';
import { View , Text } from 'react-native';
import { TextInput, Button, Snackbar} from 'react-native-paper';
import { PacmanIndicator } from 'react-native-indicators';
import axios from 'axios';

import Card from '../Card/Card';

export default class MyComponent extends React.Component {
  state = {
    text: '',
    fetchedData: null,
    loading: false,
    visible: false
  };
  
  resetData = ()=>{
    this.setState({fetchedData: null});
  }

  postQuery = ()=>{
    try {
      this.setState({loading: true, visible:false})
      let data = {};
      data = this.state.text;
      console.log(data);
      axios.post('https://sleepy-peak-30654.herokuapp.com/data', {data})
          .then(res => {
            this.setState({fetchedData: res.data,loading: false});
          })
          .catch(e => {
            console.log(e);
            this.setState({visible: true})
          });
    } catch (error) {
      console.log(error);
    }
  }

  render(){
    let toast = null;
    let activityIndicator = null;
    let fetchDataStore = null;
    if(this.state.loading){
      if(this.state.visible){
        toast = (
          <View style={{flex:1, justifyContent:'flex-end', height:250}}>
          <Snackbar 
          visible={this.state.visible} 
          onDismiss={()=> this.setState({visible: false})}
          action={{
            label: 'Retry',
            onPress: ()=>this.postQuery()}} >
            Network Error
          </Snackbar>
          </View>
        );
      }else{
        activityIndicator = (
          <View style={{flex:1, alignItems: 'center', justifyContent:'flex-end'}} >
              <PacmanIndicator size={120} animating={this.state.loading} color="rgb(254,99,71)" />
          </View>
        );
      }
    }else{
      if(this.state.fetchedData){
        fetchDataStore = <Card itemData={this.state.fetchedData} />
      }
    }
    return (
      <View style={{flex:1}} >
        <View style={{padding: 20}}>
          <Text style={{fontWeight:'bold', fontSize: 14 }}>Compare prices from Amazon, Flipkart and Paytm.</Text>
          <TextInput
            mode='outlined'
            label="search items"
            value={this.state.text}
            onChangeText={text => this.setState({text})} />
            <View style={{padding: 20}} >
              <Button mode="contained" onPress={()=>this.postQuery()}>Search </Button>
            </View>
            {activityIndicator}
         {fetchDataStore}
         {toast}
        </View>
      </View>
    );
  }
}